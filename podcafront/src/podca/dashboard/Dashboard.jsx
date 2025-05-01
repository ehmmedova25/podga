import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryThunk, postCategoryThunk, deleteCategoryThunk, updateCategoryThunk } from "../../redux/reducers/dashboardSlice";
import { Field, Form, Formik } from "formik";
import { TiDeleteOutline } from "react-icons/ti";
import { GoPencil } from "react-icons/go";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    const [editItem, setEditItem] = useState(null);
    const dispatch = useDispatch();
    const db = useSelector(state => state.categories.categories);
    const loading = useSelector(state => state.categories.loading);
    const error = useSelector(state => state.categories.error);

    useEffect(() => {
        dispatch(getCategoryThunk());
    }, [dispatch]);

    if (loading) return <span>Yüklenir...</span>;
    if (error) return <span>Xəta baş verdi</span>;

    const handleSubmit = (values, { resetForm }) => {
        if (editItem) {
            const updatedData = {
                name: values.name,
                price: values.price,
                image: values.image
            };
            dispatch(updateCategoryThunk({ id: editItem.id, updatedData }));
            setEditItem(null);
        } else {
            dispatch(postCategoryThunk(values));
        }

        resetForm();
    };

    const handleDelete = (id) => {
        dispatch(deleteCategoryThunk(id));  
      };
      
      const handleEdit = (item) => {
        setEditItem(item); 
      };
      
    return (
        <div className={styles.dashboard}>
            <Formik
                enableReinitialize
                initialValues={{
                    name: editItem ? editItem.name : "",
                    price: editItem ? editItem.price : "",
                    image: editItem ? editItem.image : "",
                }}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <div className={styles.formGroup}>
                            <Field type="text" name="name" placeholder="Name" />
                            <Field type="text" name="price" placeholder="Price" />
                            <Field type="text" name="image" placeholder="Image URL" />
                            <button type="submit">{editItem ? "Update" : "Add"}</button>
                        </div>
                    </Form>
                )}
            </Formik>

            <div className={styles.productList}>
                {Array.isArray(db) && db.length > 0 ? (
                    db.map((item) => (
                        <div className={styles.card} key={item.id}>
                            <div className={styles.body}>
                                <TiDeleteOutline onClick={() => handleDelete(item.id)} className={styles.bodyicon} />
                                <GoPencil onClick={() => handleEdit(item)} className={styles.pen} />
                                <img src={item.image} alt={item.name} className={styles.image} />
                                <span className={styles.title}>{item.name}</span>
                                <span className={styles.description}>Price: ${item.price}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <span>No products found.</span>
                )}
            </div>
        </div>
    );
};

export default Dashboard;

