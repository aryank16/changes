import React from 'react';
import "../styles/service_tracking.css";
// import 'rsuite/dist/styles/rsuite-default.css';

// import {Steps} from 'antd';

// const description = 'This is a description.';

const Service_tracking_details = () => {
    return (
        <div>
            <div className='tracking_part_id'>
                <b>Request ID : </b>
                <br /><br />
                <input style={{ width: "60%", height: "40px" }} placeholder="                         AAA-BBBB-CCC-DDDD" />
                <br /> <br />
                <button style={{ width: "60%", height: "40px", color: "white", backgroundColor: "#5D5FEF" }}>Submit</button>
                <br />   <br />
                <p>Enter Your Request ID and Check the progress</p>
            </div>
            <br /><br />


            {/* <Steps
                direction="vertical"
                size="small"
                current={1}
                items={[
                    { title: 'Finished', description },
                    {
                        title: 'In Progress',
                        description,
                    },
                    {
                        title: 'Waiting',
                        description,
                    },
                ]}
            /> */}
            <div>
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px",  backgroundColor: "#D3D3D3", fontSize: "xx-large", color: "black",  textAlign: "center", paddingTop: "30px", marginLeft: "32%", marginTop: "50px" }}>1</p>
                    <div className='tracking_steps'>
                        <p style={{ fontSize:"30px", width: "200%",color:"black" ,margin:"0px"}}>Services Booked</p>
                        <br/>
                        <div style={{color:"#5A5A5A"  }}>Periodic service </div>
                        <br />
                        <div style={{color:"#5A5A5A"  }} >AC service</div>
                        <br />
                        <div style={{color:"#5A5A5A"  }}>Cleaning service</div>

                    </div>
                    <div className='tracking_line12'></div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px", backgroundColor: "#D3D3D3", fontSize: "xx-large", color: "black", textAlign: "center", paddingTop: "30px", marginLeft: "32%", marginTop: "50px" }}>2</p>
                    <div className='tracking_steps'>
                        <p style={{ fontSize:"30px", width: "200%",color:"black",  }}>Assigning respective mechanic and workshop</p>
                        <br />
                        <p style={{ color: "#5A5A5A", fontSize: "medium" }}>Request ID:</p>
                        <h6>MDC002345643</h6>
                        <br />

                        <p style={{ color: "#5A5A5A", fontSize: "medium" }}>Mechanic's Name:</p>
                        <h6>Seenu Reddy</h6>
                        <div className='tracking_line23'></div>
                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px", fontSize: "xx-large", color: "black", textAlign: "center", paddingTop: "30px", marginLeft: "32%", marginTop: "50px" ,backgroundColor:"#D3D3D3"}}>3</p>
                    <div className='tracking_steps'>
                        <p style={{ fontSize:"30px", width: "200%", color:"black",  }}> Pick-up to your shared location</p>
                        <br />
                        <p style={{ color: "#5A5A5A", fontSize: "medium" }}>Status</p>
                        <h6>Pending</h6>
                        <br />
                        <h6>Check Location:<button style={{border:"1px solid gray"}}>Click Here</button></h6>
                        <div className='tracking_line34'></div>

                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px",  fontSize: "xx-large", color: "black",backgroundColor: "#D3D3D3", textAlign: "center", paddingTop: "30px", marginLeft: "32%", marginTop: "50px" }}>4</p>
                    <div className='tracking_steps'>
                        <p style={{ fontSize:"30px", width: "200%", color:"black" }}>Taking vehicle from shared location to workshop</p>
                        <br />
                        <input type="file" id="input-file-upload" multiple={true} />
                        <div className='tracking_line45'></div> 
                        
                
                

                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px",   fontSize: "xx-large", color: "black",backgroundColor: "#D3D3D3", textAlign: "center", paddingTop: "30px", marginLeft: "32%", marginTop: "50px" }}>5</p>
                    <div className='tracking_steps'>
                        <p style={{ fontSize:"30px", width: "200%", color:"black" }}> Service in progress</p>

                        <p style={{ color: "#5A5A5A", fontSize: "medium" }}>Status</p>
                        <h6>work is in progess , it will be completed soon</h6>
                        <br />
                        <h6>check Location : <button style={{border:"1px solid gray"}}>Click Here</button></h6>

                        <div className='tracking_line56'></div>

                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px", fontSize: "xx-large", color: "black",backgroundColor: "#D3D3D3", textAlign: "center", paddingTop: "30px", marginLeft: "32%", marginTop: "50px" }}>6</p>
                    <div className='tracking_steps'>
                        <p style={{ fontSize:"30px", width: "200%", color:"black"}}> Service successfully completed </p>
                        <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" style={{ marginLeft: "30%" }} fill="green" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>
                        <div className='tracking_line67'></div>

                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px",  fontSize: "xx-large", color: "black",backgroundColor: "#D3D3D3", textAlign: "center", paddingTop: "30px", marginLeft: "32%", marginTop: "50px" }}>7</p>
                    <div className='tracking_steps'>
                        <p style={{fontSize:"30px",  width: "200%", color:"black" }}>Drop date and time </p>
                        <br />

                        <p style={{ color: "#5A5A5A", fontSize: "medium" }}>Scheduled Time</p>
                        <h6>02, Jan 2023 12:05 pm</h6>
                        <div className='tracking_line78'></div>

                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px", fontSize: "xx-large", color: "black",backgroundColor: "#D3D3D3", textAlign: "center", paddingTop: "30px", marginLeft: "32%", marginTop: "50px" }}>8</p>
                    <div className='tracking_steps'>
                        <p style={{ fontSize:"30px", width: "200%", color:"black" }}>Vehicle delivery to shared location</p>
                        <br />
                        <p style={{ color: "#5A5A5A", fontSize: "large" }}>Status</p>
                        <h6>Pending</h6>
                        <br />
                        <h6>Check Location : <button style={{border:"1px solid black"}}>Click Here</button></h6>
                        <div className='tracking_line89'></div>

                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px", fontSize: "xx-large", color: "black",backgroundColor: "#D3D3D3", textAlign: "center", paddingTop: "30px", marginLeft: "32%", marginTop: "50px" }}>9</p>
                    <div className='tracking_steps'>
                        <p style={{ fontSize:"30px", width: "200%",color:"black" }}> Successfully delivered</p>
                        <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" style={{ marginLeft: "30%" }} fill="green" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>


                    </div>
                </div>
            </div>
            <br /><br />    <br /><br />    <br /><br />    <br /><br />    <br /><br />    <br /><br />
        </div>
    )
}

export default Service_tracking_details