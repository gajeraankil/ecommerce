import React, { useEffect } from "react";
import { resetAlert } from "../../redux/actions/alertAction";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

const Alert = () => {
  const { enqueueSnackbar } = useSnackbar();

  const alert = useSelector((state) => state.alert);

  const dispatch = useDispatch();

  useEffect(() => {
    if (alert.text !== "") {
      enqueueSnackbar(alert.text, {
        variant: alert.color,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });

      setTimeout(() => {
        dispatch(resetAlert());
      }, 2000);
    }
  }, [dispatch, enqueueSnackbar, alert.text, alert.color]);
  return <></>;
};

export default Alert;
