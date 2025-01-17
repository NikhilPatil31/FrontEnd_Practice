import { useEffect, useState} from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom';

export default function MyForm() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const existData = JSON.parse(localStorage.getItem("data")) || [];
      setData(existData);
    },[]);

    console.log(typeof data);

    const initialValues = {
        firstname:'',
        lastname:'',
        email:'',
        employeeID:'',
        number:'',
        dob:'',
        startdate:'',
        lastdate:'',
        status:'',
        workdays:[],
        address:'',
        pincode:'',
        password:''
    };

    const validationSchema = Yup.object({
        firstname: Yup.string().matches(/^[A-Za-z]*$/,"Only characters").required("Required"),
        lastname: Yup.string().matches(/^[A-Za-z]*$/, "Only characters").required("Required"),
        email: Yup.string().matches(/^[a-z0-9._-]+@[a-z]+\.[a-z]{2,4}$/,"email must be in format exp. abc@gmail.com").required("Required"),
        employeeID: Yup.number().required("Required"),
        number: Yup.string().matches(/^[0-9]{10}$/, "Number must be exactly 10 digits").required("Required"),
        
        dob: Yup.date()
        .required("Required")
        .test("is-valid-age", "You must be at least 18 years old",(value) => {
            if(!value) return false;

            var today = new Date();
            var birth = new Date(value);
            var age_now = today.getFullYear() - birth.getFullYear();
            var m = today.getMonth() - birth.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) 
            {
                age_now--;
            }

            return age_now > 18 ? true : false;
        }),

        startdate: Yup.date().required("Required"),
        lastdate: Yup.date().required("Required")
        .test("is-valid-lastdate","Your gap between startdate and lastdate may be 3 months", 
            function (value) {
            const startdate  = this.parent.startdate; // Get startdate from form values
            if (!startdate || !value) return false; // Ensure both dates are provided
  
            const startDate = new Date(startdate);
            const lastDate = new Date(value);
  
            // Calculate the difference in months
            const diffInMonths =
              (lastDate.getFullYear() - startDate.getFullYear()) * 12 +
              lastDate.getMonth() -
              startDate.getMonth();
  
            return diffInMonths >= 3? true:false; // Return true if the gap is 3 months or more
          }
        ),
        
        status: Yup.string().required("Required"),
        workdays: Yup.array().min(1, "Select at least one workday").required("Required"),
        address: Yup.string().required("Required"),
        pincode: Yup.string()
        // .length(6, "Pincode must be exactly 6 digits")
        .matches(/^[0-9]{6}$/, "Pincode must be exactly 6 digits")
        .required("Pincode is required"),
    });

    const onSubmit = (values,{setSubmitting, resetForm}) => {
        console.log('Form data', values);
        
        
        const updated = [...data, values];
        localStorage.setItem("data",JSON.stringify(updated));
        setData(updated);
        resetForm();
        setSubmitting(false);    
    };

    // const checkData = (values) => {      
    //   for(let key in values){
    //     const element = values[key];
    //     if(element === ""){
    //       return false;
    //     }
    //     else{
    //       return true;
    //     }
    //   }
    // }

    // const [inputs, setInputs] = useState({});
    // const [status, setStatus] = useState("");

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({...values, [name]: value}))
    // }

    // const handleStatusType = (event) => {
    //     // event.preventDefault();
    //     setStatus(event.target.value);
    // }

    // const handleWorkdays = (event) => {
    //     const workdays = event.target.value;
    //     console.log(workdays);
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     console.log(inputs);
    // }

    const navigate = useNavigate();
    return (
        <>
        <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
        >
        {({ isSubmitting }) => (
        <Form>
          <div className="employee">
            <h1>Employee Registration Form</h1>
            <label>
              Enter your firstname:
              <Field type="text" name="firstname" />
              <ErrorMessage name="firstname" component="div" />
            </label>
            <br />

            <label>
              Enter your lastname:
              <Field type="text" name="lastname" />
              <ErrorMessage name="lastname" component="div" />
            </label>
            <br />

            <label>
              Enter your email:
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </label>
            <br />

            <label>
              Enter your employeeID:
              <Field type="number" name="employeeID" />
              <ErrorMessage name="employeeID" component="div" />
            </label>
            <br />

            {/* <label>
              Enter your age:
              <Field type="number" name="age" />
              <ErrorMessage name="age" component="div" />
            </label>
            <br /> */}

            <label>
              Enter your Number:
              <Field type="number" name="number" />
              <ErrorMessage name="number" component="div" />
            </label>
            <br />

            <label>
              Enter your DOB:
              <Field type="date" name="dob" />
              <ErrorMessage name="dob" component="div" />
            </label>
            <br />
            
            <label>
              Enter your startdate:
              <Field type="date" name="startdate" />
              <ErrorMessage name="startdate" component="div" />
            </label>
            <br />

            <label>
              Enter your lastdate:
              <Field type="date" name="lastdate" />
              <ErrorMessage name="lastdate" component="div" />
            </label>
            <br />

            <label>
              Select Your Status:
              <div>
                <Field type="radio" name="status" value="Active" />Active
                <Field type="radio" name="status" value="Inactive" />Inactive
              </div>
              <ErrorMessage name="status" component="div" />
            </label>
            <br />

            <label>
              Select Your Work Days:
              <div>
                <Field type="checkbox" name="workdays" value="Monday" />Monday
                <Field type="checkbox" name="workdays" value="Tuesday" />Tuesday
                
                <Field type="checkbox" name="workdays" value="Wednesday" />Wednesday
                
                <Field type="checkbox" name="workdays" value="Thursday" />Thursday
                
                <Field type="checkbox" name="workdays" value="Friday" />Friday
                
                <Field type="checkbox" name="workdays" value="Saturday" />Saturday
                
                <Field type="checkbox" name="workdays" value="Sunday" />Sunday
                
              </div>
              <ErrorMessage name="workdays" component="div" />
            </label>
            <br />

            <label>
              Enter your address:
              <Field type="text" name="address" />
              <ErrorMessage name="address" component="div" />
            </label>
            <br />

            <label>
              Enter your pincode:
              <Field type="number" name="pincode" />
              <ErrorMessage name="pincode" component="div" />
            </label>
            <br />

            <label>
              Enter your password:
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </label>
            <br />

            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>

              {/* <button onClick={() => navigate("/display")}>Goto Display Page</button> */}
              <button onClick={() => navigate("/login")}>Login</button>
            </div>
            <label> Count: {data.length} </label>
          </div>
        </Form>
      )}
        </Formik>
        </>
    )
  }