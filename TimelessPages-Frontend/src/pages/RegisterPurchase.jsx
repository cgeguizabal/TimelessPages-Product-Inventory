import PurchaseForm from "../components/PurchaseForm";
import purchaseStyles from "../styles/page/purchasePage.module.scss";
import { RiArrowGoBackLine } from "react-icons/ri";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function RegisterPurchase() {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${purchaseStyles.container}`}>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            x: { duration: 1, ease: "easeInOut" },
            opacity: { duration: 1.5, ease: "easeOut" },
          }}
          className={purchaseStyles.backButton}
          onClick={() => navigate("/home")}
        >
          <RiArrowGoBackLine />
        </motion.div>
        <PurchaseForm />
      </div>
    </>
  );
}

export default RegisterPurchase;
