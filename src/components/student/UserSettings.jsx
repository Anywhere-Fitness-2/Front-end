import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


const initialFormData = {
    id: 0,
    email: '',
    instructor: '0', // 0
    name: '',
    zip: '',
}

export default function UserSettings(props) {
  const user = useSelector(state => state.account.user)
  const [formData, setFormData] = useState(initialFormData)
  const dispatch = useDispatch();
  const api = useSelector(state => state.app.axios);

  useEffect(() => {
    setFormData(user)
  }, [])

  useEffect(() => {
    setFormData(user)
  }, [user])

  function changeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function saveHandler(e) {
    e.preventDefault();
    dispatch({ type: 'ACCOUNT_UPDATE', payload: {user: formData } })
  }

  function deleteHandler(e) {
    e.preventDefault();
    api.delete(`/user/delete/${user.id}`)
      .then(res => {
        dispatch({ type: 'ACCOUNT_DELETE' })
        dispatch({type: 'APP_LOGOUT'})
      })
      .catch(err => {

        deleteLocal()

      })
  }

  function deleteLocal() {
    dispatch({ type: 'ACCOUNT_DELETE' })
    dispatch({type: 'APP_LOGOUT'})
  }



  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name
            <input type="text" name='name' id='name' value={formData.name} onChange={changeHandler} className="form-control" />
          </label>
          <label htmlFor="email">E-mail
            <input type="text" name='email' id='email' value={formData.email} onChange={changeHandler} className="form-control" />
          </label>
          <label htmlFor="zip">ZIP
            <input type="text" name='zip' id='zip' value={formData.zip} onChange={changeHandler} className="form-control" />
          </label>
        </div>
        <div className="form-group">
          <button onClick={saveHandler} className="btn btn-info mr-2">
            Save
          </button>
        </div>
      </form>

      <button type='button' onClick={deleteHandler} className="btn btn-danger">
        DELETE ACCOUNT
      </button>




      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

      <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel2">BACKEND API does not support this. Delete locally?</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
      </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
              <button type="button" onClick={deleteLocal} class="btn btn-primary">Yes</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )

}