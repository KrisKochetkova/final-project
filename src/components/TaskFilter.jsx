import React from 'react';
import Myinput from "./UI/input/Myinput";
import MySelect from "./UI/select/MySelect";

const TaskFilter = ({filter, setFilter}) => {
    return (
        <div>
         <MySelect 
        value={filter.sort}
        onChange={selectedSort=> setFilter({...filter, sort: selectedSort})}
        defaultValue="Sort by"
        options={[
          {value: 'title', name: "Name"},
          {value: 'body', name: "Description"},
          {value: 'valueTime', name: "Date"},
          // {value: 'title', name: "By name"}
          // {value: 'title', name: "By name"}
        ]}
      />
      <Myinput
      value ={filter.query}
      onChange = {e=> setFilter({...filter, query: e.target.value})}
      placeholder = {'Search for tasks'}/>
        </div>
    );
};

export default TaskFilter;