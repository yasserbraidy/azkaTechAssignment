import { Form } from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import SelectInput from "../SelectInput";
import { Button } from "react-bootstrap";
import { useState } from "react";

interface IHomeHeader{
refreshBtn: () => void
}

export default function HomeHeader(props: IHomeHeader) {
    const [checked, setChecked] = useState(true);
    const options = [
    { value: "Past 30 Days", label: "Past 30 Days" },
    { value: "Past 60 Days", label: "Past 60 Days" },
    { value: "Past 90 Days", label: "Past 90 Days" },
    { value: "Past 1 year", label: "Past 1 year" },
    { value: "Past 2 year", label: "Past 2 year" },
    ]; //Fake data
    return (
        <>
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-4 gap-3">
                <div className="d-flex flex-column">
                    <h3>Quick Insights</h3>
                    <p className="text-primary mb-0">Dashboard</p>
                </div>
                
                <div className="d-flex justify-content-between align-items-center rounded flex-wrap gap-3">
                        {/* Online Check Box */}
                        <div className="d-flex justify-content-between align-items-center">
                        <Form.Check
                            className="form-switch mb-0 iq-status-switch"
                            type="switch"
                            id="flexSwitchCheckChecked"
                            defaultChecked={checked}
                            onClick={() => setChecked(!checked)}
                        />
                        <label
                            className="form-check-label iq-reset-status "
                            htmlFor="flexSwitchCheckChecked"
                        >
                            {checked === true ? "Online" : "Offline"}
                        </label>
                        </div>
                        
                        {/* Past Days Select Input */}
                        <div className="form-group mb-0" style={{ minWidth: "145px" }}>
                            <SelectInput options={options}></SelectInput>
                        </div>
                        
                        <div className="form-group mb-0 ">
                        <Flatpickr
                            options={{ mode: "range", minDate: "today" }}
                            className="form-control range_flatpicker"
                            placeholder="24 Jan 2022 to 23 Feb 2022"
                        />
                        </div>
                        
                        <Button type="button" className="primary" onClick={props.refreshBtn}>
                            Refresh
                    </Button>
                    
                </div>
            </div>
        </>
    );
}