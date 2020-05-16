import React from "react";

export function CreateScheduleBtn(props) {
  return (
    // <!-- Button trigger modal -->
    <button onClick={props.onClick} type="button" className="btn btn-primary" data-toggle="modal" data-target="#createScheduleModal">
      Create Schedule
    </button>
  );
}

export function CreateScheduleModal({children}) {
  
  return (
    // <!-- Modal -->
    <div className="modal fade" id="createScheduleModal" tabindex="-1" role="dialog" aria-labelledby="createScheduleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createScheduleModalLabel">Create Schedule Event</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}