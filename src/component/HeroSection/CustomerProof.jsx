import { useState, useEffect } from "react";
import styles from "./CustomerProof.module.css";
import { FaHeart } from "react-icons/fa";

export default function CustomerProof() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=6&inc=picture,name"
        );
        const data = await response.json();
        setCustomers(data.results);
      } catch (error) {
        console.error("Error fetching customer data:", error);
        // Fallback to placeholder if API fails
        setCustomers(
          Array(6).fill({
            picture: { thumbnail: "https://via.placeholder.com/50" },
          })
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading customer avatars...</div>;
  }

  return (
    <div className={styles.heroCustomerProof}>
      <div className={styles.customerImgWrapper}>
        {customers.map((customer, index) => (
          <img
            key={index}
            src={customer.picture.thumbnail}
            alt={`Customer ${customer.name?.first || index}`}
            className={styles.customerAvatar}
            title={
              customer.name
                ? `${customer.name.first} ${customer.name.last}`
                : `Customer ${index}`
            }
          />
        ))}
      </div>
      <p className={styles.customerData}>
        <span>310,000+</span> meals delivered this year!
        <br />
        <FaHeart className={styles.heartIcon} />{" "}
        <span>4.6 (10.9K Reviews)</span>
      </p>
    </div>
  );
}
