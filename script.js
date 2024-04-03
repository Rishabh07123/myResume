
let x = 0;
function toggleFunction(){
    let s_content = document.getElementById('sidebar-content');
    if(x == 0){
        s_content.style.display = 'block';
        x = 1;
    }else{
        s_content.style.display = 'none';
        x = 0;
    }
    
}
let follower = document.getElementById('cursor');
window.addEventListener('mousemove' ,  (e) => {
    var x = e.pageX + 10;
    var y = e.pageY + 10;
    cursor.style.left = x + 'px' ;
    cursor.style.top = y + 'px' ;
})