import React from 'react'

const User = ({user}) => {
    const { name , login , avatar_url , html_url , public_repos , followers , following , created_at , updated_at} = user;
    let created = new Date(created_at);
    let updated = new Date(updated_at);
  return (
    <div>
      {
        <div className="user-container">
            <div className="profile">
                <img src={avatar_url} alt='avatar'/>
                <a href={html_url}>{name || login}</a>
            </div>
            <div className="details">
              <div className="created">Account created on : <span>{`${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`}</span></div>
              <div className="updated">Last updated on : <span>{`${updated.getDate()}-${updated.getMonth()+1}-${updated.getFullYear()}`}</span></div>
              <div className="public-repos">No of public repos : <span>{public_repos}</span></div>
              <div className="followers">Followers : <span>{followers}</span></div>
              <div className="following">Following : <span>{following}</span></div>
            </div>
        </div>
      }
    </div>
  )
}

export default User
