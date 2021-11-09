import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useFirebase from "./../../Hook/useFirebase";
const Details = () => {
  const [service, setService] = useState({});
  const { user } = useFirebase();
  const { serviceId } = useParams();
  console.log(serviceId);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "pending";
    fetch("http://localhost:5000/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/singleService/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <div className="details-container">
        <div className="row container">
          <div className="col-md-6">
            <img className="w-50" src={service.image} alt="" />
            <p>{service?.description}</p>
            <h1>{service?.name}</h1>
            <h1> {service?.price}</h1>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="Name"
                defaultValue={service?.name}
                className="p-2 m-2 w-100 input-field"
              />

              <input
                {...register("description")}
                defaultValue={service?.description}
                placeholder="Description"
                className="p-2 m-2 w-100 input-field"
              />

              <input
                {...register("image", { required: true })}
                placeholder="Image Link"
                defaultValue={service?.image}
                className="p-2 m-2 w-100 input-field"
              />

              <input
                {...register("price", { required: true })}
                placeholder="Price"
                defaultValue={service?.price}
                type="number"
                className="p-2 m-2 w-100 input-field"
              />

              <select {...register("model")} className="p-2 m-2 w-100">
                <option value="premium">premium</option>
                <option value="classic">classic</option>
                <option value="business">business</option>
              </select>
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order now"
                className="btn btn-info w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
