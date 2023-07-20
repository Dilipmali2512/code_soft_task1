    const bar=document.getElementById('bar');
    const head=document.getElementById('headerid');
    const body=document.getElementById('body');
    bar.onclick=function(){
        head.classList.toggle('active');
        body.classList.toggle('active');
    }
    document.onclick=function(e){
        if (e.target.id !== 'bar'&&e.target.id !== 'headerid') {
                head.classList.remove('active');
                body.classList.remove('active');
            }
    }