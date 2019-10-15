import React from 'react';
import './ScrollText.scss';

const ScrollText = (props) => {
    console.log(props);
    const {episode_id, opening_crawl, title} = props;
    return (
        <section className='scroll-text'>
            <div className="fade"></div>
          <section className='star-wars'>
              <div className='crawl'>
                <div className='title'>
                   <p>Episode {episode_id} </p>
                   <h3>{title}</h3>
                </div>
                {opening_crawl}
              </div>
          </section>
        </section>
    )
}

export default ScrollText;