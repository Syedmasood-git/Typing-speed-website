import React,{useState} from 'react'



const Footer = () => {
    const [color,setColor]=useState("Default")
    const changeColor=(e)=>{
        setColor(e.target.value)
        console.log(color);
    }
  return (
    <div style={{backgroundColor:{color}}}>
        <div className='reload-div'>
            <button className='reload-btn'><i class="fa-solid fa-rotate-right"></i></button>
        </div>
        <div className='reset-div'>
            <button className='reset-text reset-btn'>esc</button>
            <span className='reset-text'>-</span>
            <p className='reset-text text'>reset</p>
        </div>
        <div className='word-div'>
            <button className='reset-text2 reset-btn'>10</button>
            <button className='reset-text2 reset-btn'>50</button>
            <button className='reset-text2 reset-btn'>80</button>
            <button className='reset-text2 reset-btn'>100</button>
            <span className='reset-text2'>-</span>
            <p className='reset-text2 text'>no of words</p>
        </div>
        <div className='social-div'>
            <div className='socialmedia-icon'>
                <a href='https://github.com/Syedmasood-git'><i class="fa-brands fa-github"></i></a>
                <a className='linkedin' href='https://www.linkedin.com/in/syed-masood-/'><i class="fa-brands fa-linkedin"></i></a>
                <a href='mailto:masoodhussaini46@gmail.com'><i class="fa-solid fa-envelope"></i></a>
                <a className='insta' href='https://www.instagram.com/syed_masood_46/'><i class="fa-brands fa-instagram"></i></a>
            </div>
            <select className='color-select' onChange={changeColor}>
                <option value='blue'>Blue</option>
                <option value='red'>Red</option>
            </select>
        </div>
    </div>
  )
}

export default Footer