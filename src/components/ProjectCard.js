import React from 'react';

import ItemList from './ItemList';
import TechBlock from './TechBlock';

import '../styles/ProjectCard.scss';

const ProjectCard = (props) => {
  return (
    <div className={`card ${props.style}`}>
      <div className="card__title">
        <p>{props.title}</p>
      </div>
      <p className="card__type">a {props.type} project</p>
      <TechBlock techitems={props.tech} key={props.id} />
      <div className="card__overview">{props.overview}</div>
      <div class="clear"></div>
      {props.title === "Dinner's On" ? (
        <div className="btn__container">
          <button type="button" className="btn">
            Click here to view code on Github
          </button>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn">
              Click here to view code on Github
            </button>
          </a>
          {/* <a
            className="card__links-action"
            href={props.project}
            target="_blank"
            rel="noopener noreferrer"
          ></a> */}
        </div>
      )}
      <div className="card__content">
        <p>{props.content}</p>
      </div>
      <div className="card__detail-section">
        {/* {props.reports.length > 0 && ( */}
        <ItemList
          itemlist={props.reports}
          key={props.id}
          title="Click Here to View Design Documents."
          itemtype="reports"
        />
        {/*   )} */}

        {/*  {props.artifacts.length > 0 && ( */}
        <ItemList
          itemlist={props.artifacts}
          title="Click Here to View Design Artifacts."
          itemtype="artifacts"
        />
        {/*  )} */}
      </div>
      <div
        style={{
          display: 'inline-flex',
          justifyContent: 'flex-start',
          backgroundColor: '#dc8dce',
        }}
      >
        <img className="card__image" src={props.image} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export default ProjectCard;
