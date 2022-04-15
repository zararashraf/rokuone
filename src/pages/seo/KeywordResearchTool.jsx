import React, { useEffect, useState } from 'react'

const url = '';

const KeywordResearchTool = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
      //getUsers();
  });

  return (
    <div>KeywordResearchTool</div>
  )
}

export default KeywordResearchTool