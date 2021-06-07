import React, { useState } from 'react'
import { INITIAL_FILTERS, INITIAL_PROJECTS } from './Portfolio.const'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

function Portfolio(props) {
  const [selected, setSelected] = useState('All');

  const projects = INITIAL_PROJECTS;
  const selectedProjects = selected === 'All' ? projects : projects.filter((item) => item.category === selected)

  const onSelectFilter = (filter) => {
    setSelected(filter.target.innerText);
  }

  return (
    <div className='Portfolio'>
      <Toolbar
        filters={INITIAL_FILTERS}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList projects={selectedProjects} />
    </div>
  )
}

export default Portfolio


