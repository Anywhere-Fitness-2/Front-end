import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ClassesList from './ClassesList'
import ClassSearch from './ClassSearch'
import ClassesFilter from './ClassesFilter'
// dummy data
import { getClasses } from '../../data/sample'
import UserSettings from './UserSettings'

export default function Profile() {
  const dispatch = useDispatch()
  const classes = useSelector(state => state.account.registered_classes)

  useEffect(() => {
    // load classes and push into state
    // dispatch({ type: 'CLASSES_FETCHING', payload: true })
    dispatch({ type: 'CLASSES_LIST_UPDATE', payload: getClasses() })
    // dispatch({ type: 'CLASSES_FETCHING', payload: false })
  }, [])

  function deleteClass(id) {
    dispatch({ type: 'ACCOUNT_CLASS_DELETE', payload: id })
  }

  return (
    <div>
      <h2>
        User Profile
      </h2>
      <section>
        <h3>
          Edit Profile
        </h3>
        <UserSettings />
      </section>
      <section>
        {/* <h3>
          Manage my Classes
        </h3>
        <div>
          <ClassesList classes={classes} deleteClass={deleteClass} />
        </div> */}
      </section>
    </div>
  )
}