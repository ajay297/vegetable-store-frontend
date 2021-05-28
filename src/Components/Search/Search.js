import React from 'react'

function Search() {
    return (
        <section className="section-sidebar">
        <div className="mb-4 section-head">
          <h3 className="section-title h4"><span>Search</span></h3>
        </div>
        <form autoComplete="off">
          <div className="row">
            <div className="col">
              <div className="input-view-flat input-gray-shadow form-group">
                <div className="input-group">
                  <input className="form-control" name="search" type="text" placeholder="Keywords" required="required" />
                </div>
              </div>
            </div>
            <div className="col-auto">
              <button className="mb-0 btn btn-theme" type="submit">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
      </section>
    )
}

export default Search
