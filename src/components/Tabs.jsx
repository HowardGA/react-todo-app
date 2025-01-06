import React from 'react'

const Tabs = ({todoList, setCurrentTab, currentTab}) => {
const tabs = ['All','Open','Completed'];

  return (
    <nav className='tab-container'>
        {tabs.map((tab, tabIndex) => {
          const numOfTasks = tab === 'All' ? todoList.length : 
            tab === 'Open' ? todoList.filter((val) => !val.complete).length :
              todoList.filter(val => val.complete).length
            return (
                <button key={tabIndex} className={"tab-button " + ((tab == currentTab) ? "tab-selected" : '')} onClick={() => {setCurrentTab(tab)}}>
                    <h4>{tab} <span>({numOfTasks})</span></h4>
                </button>
            )
        })}
        <hr/>
    </nav>
  )
}

export default Tabs