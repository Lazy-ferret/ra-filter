import React from 'react'

export default function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;

    return (
        <div>
            <ul className='Toolbar'>
                {filters.map((filter) => {
                    return (
                        <li
                            className={filter === selected ? 'Toolbar-Filter Toolbar-Filter-Selected' : 'Toolbar-Filter'}
                            key={filter}
                            onClick={onSelectFilter}
                        >{filter}
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}
