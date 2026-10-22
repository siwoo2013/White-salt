// Render static site build: discover numbered TXT posts, copy the whole site to dist.
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const out=path.join(root,'dist');
const isFile=p=>fs.existsSync(p)&&fs.statSync(p).isFile();
const board=[];
for(const [dir,type] of [['공지','notice'],['자료','resource']]){
  for(const filename of fs.readdirSync(path.join(root,dir))){
    const found=filename.match(/^(\d{1,5})_(.+)\.txt$/i);
    if(!found)continue;
    const number=Number(found[1]);
    const title=found[2].replaceAll('_',' ');
    const content=fs.readFileSync(path.join(root,dir,filename),'utf8').replace(/^\uFEFF/,'').trim();
    const files=[];
    if(type==='resource'){
      const prefix=found[1]+'_';
      for(const f of fs.readdirSync(path.join(root,dir))){
        if(!f.startsWith(prefix)||!(/\.(pdf|docx|xlsx|zip)$/i).test(f)||!isFile(path.join(root,dir,f)))continue;
        files.push({name:f,url:dir+'/'+encodeURIComponent(f)});
      }
    }
    board.push({type,number,title,content,files});
  }
}
board.sort((a,b)=>b.number-a.number||a.type.localeCompare(b.type)||a.title.localeCompare(b.title,'ko'));
fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
for(const entry of fs.readdirSync(root)){
 if(['dist','node_modules','.git','scripts','.github'].includes(entry))continue;
 fs.cpSync(path.join(root,entry),path.join(out,entry),{recursive:true});
}
fs.mkdirSync(path.join(out,'data'),{recursive:true});
fs.writeFileSync(path.join(out,'data/board.json'),JSON.stringify(board,null,2),'utf8');
console.log('Built site, '+board.length+' board entries');
