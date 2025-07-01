randomHeight(){
    return `${Math.random()*(70-40)+30}px`
}
randomObstacles(){
    const obstacle=document.createElement("div")
    obstacle.classList.add("cactus")
    obstacle.style.height
}
checkCollision(){
    const gameProcess=()=>{
        if(this.gameOver===true) return;
        const obstacle=this.gameArea.querySelector(".cactus")
        const obstacleRect=obstacle.getBoundingClientRect()
        
    }
}