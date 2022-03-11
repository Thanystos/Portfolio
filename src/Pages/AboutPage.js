import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'Profil'} span={'Profil'} />
            <ImageSection />
            <Tittle title={'Compétences'} span={'Compétences'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'React Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Node Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'PHP'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'HTML/CSS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'SQL'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'WordPress'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Windows'} progress={'90%'} width={'90%'} />
            </div>

            
        </div>
    )
}

export default AboutPage;
