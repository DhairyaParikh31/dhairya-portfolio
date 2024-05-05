import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/dhairya-parikh-8410b225b/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/DhairyaParikh31' target='_blank'><BsGithub /></a>
        <a href='https://leetcode.com/u/DhairyaParikh31/' target='_blank'><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials