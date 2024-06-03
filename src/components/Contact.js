import React from 'react'
const Contact = () => {
  return (
    <div className='m-5 flex flex-row align-center justify-center p-3'>
        <section className="">
      <div>
        <div>
          <div>
            <h1 className="text-center">Contact US</h1>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span class="fw-bold">Main Location:</span> 50 Main st Boston MA
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Enrollment Phone:</span> (555) 555-5555
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Main Phone:</span> (333) 333-3333
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Enrollment Email:</span> (555)
                enroll@frontend.test
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Main Email:</span>
                main@frontend.test
              </li>
            </ul>
          </div>
          <div className="">
            <div id="map">
                <img width={400} height={300} src='https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
  )
}

export default Contact