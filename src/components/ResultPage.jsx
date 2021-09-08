import { useState } from "react";
import data from "../data";
import Button from "./Button";

function ResultPage() {
    const [students, setStudents] = useState(data);

    const handleResult = () => {
        const theResult = data.map(result => {
            if (result.id) {
                return result.exam + result.cAss
            }
        })
        alert(theResult)
    }

    const displayStudentProfile = students.map(student => {
        const { id, image, name, regNo, address, cAss, exam } = student;
        return (
            <div key={id} className="content">
                <img src={image} alt={name} />
                <div className="section">                
                    <h4>
                        name <span>: {name}</span>
                    </h4>
                    <h4>
                        reg no <span>: {regNo}</span>
                    </h4>
                    <h4>
                        address <span>: {address}</span>
                    </h4>
                    <h4>
                        total score <span>: {cAss + exam}</span>
                    </h4>
                </div>
                <Button handleResult={handleResult} />
            </div>
        )
    })
    return (
        <div className="grid">
            {displayStudentProfile}
        </div>       
    )
}

export default ResultPage;
