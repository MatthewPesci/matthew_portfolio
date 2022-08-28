import React, { useState, useEffects } from 'react'
import { AiFillEye,AiFillGithub } from 'react-icons/ai'
import {motion} from 'framer-motion'


import './Work.scss';
import {urlFor, client} from '../../client';
import {AppWrap} from '../../wrapper';


const Work = () => {
  const [activeFilter, setAciveFiilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [filterWork, setfilterWork] = useState([]);


  useEffects(() => {
    const query ='*[_type == "works"]';
    client.fetch(query)
    .then((data) => {
      setWorks(data);
      setFilterWork(data);
    })
  }, [])



  const handleWorkFilter = (item) => {
    setAciveFiilter(item);
    setAnimateCard([{y:100,opacity:0}]);

    setTimeout(() => {
      setAnimateCard([{y:0, opacity:1 }]);

      if(item ==='All'){
        setfilterWork(works)
      } else{
        setfilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500);
  }

  return (
   <>
    <h2 className="head-text">My Creative <span> Portfolio</span></h2>
    <div className="app__work-filter">
      {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item,index) => (
        <div
        key={index}
        onClick={() => handleWorkFilter(item)}
        className={`app__work-filter-item app__flex p-text  ${activeFilter === item ? 'item-active' : ' ' }`}
        >

        </div>
      ))}
    </div>
    <motion.div
    animate={animateCard}
    transition={{Duration: 0.5, delayChildren: 0.5 }}
    className="app__work-portfolio"
    >

        { filterWork.map((work,index) =>(
          <div className="app__work-item app__flex" key={intex}>
          <div className="app__work-img app__flex"> 
          <img src={urlFor(work.imgUrl)} alt={work.name} />

          
          <motion.div
          whileHover={{opacity: [0,1]}}
          transition={{Duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
          className="app__work-hover app__flex"
          >

          <a href={work.codeLink} target="_blank" rel="noreferrer">
          <motion.div
          whileInView={{scale:[0,1]}}
            whileHover={{scale: [1,0.9]}}
            transition={{Duration: 0.25}}
            className="app__flex"
          >

          <AiFillEyeGithub />
          </motion.div>
          </a>
          </motion.div>

          </div>

          <div className="app__work-content app__flex">
          <h4 className="bold-text">{work.title}</h4>
          <p className="p-text" style={{marginTop:10}}>{work.description}</p>

          <div className="app__work-tag app__flex">
          <p className="p-text">{work.tags[0]}</p>

          </div>
          </div>
          </div>
        ))}
    </motion.div>
   
   </>
  )
}

export default AppWrap(Work, 'work')