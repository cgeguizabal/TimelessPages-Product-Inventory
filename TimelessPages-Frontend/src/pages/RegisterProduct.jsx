import ProductForm from "../components/ProductForm";
import registerProductStyles from "../styles/page/registerProductPage.module.scss";

import { RiArrowGoBackLine } from "react-icons/ri";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function RegisterProduct() {
  const navigate = useNavigate();
  return (
    <div className={registerProductStyles.container}>
      <div className={registerProductStyles.logo_container}>
        <img src="timelessPages2.png" alt="logo" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          x: { duration: 1, ease: "easeInOut" },
          opacity: { duration: 1.5, ease: "easeOut" },
        }}
        className={registerProductStyles.backButton}
        onClick={() => navigate("/home")}
      >
        <RiArrowGoBackLine />
      </motion.div>
      <ProductForm />
    </div>
  );
}

export default RegisterProduct;
