import React from "react";
import { notificationActions } from "../../../store/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import classes from "./Notification.module.css";
import { Alert, Stack, Typography} from "@mui/material";

const NotificationBar = () => {
    const dispatch: AppDispatch = useDispatch();
    const notif = useSelector((state: RootState) => state.notification);

    React.useEffect(() => {
        if (notif.type !== null) {
            setTimeout(() => {
                dispatch(notificationActions.clearStatus());
            }, 3000);
        }
    }, [notif]);

    return (
        <>
            {notif.type !== null &&
                (
                    <div className={classes.notifPopup}>
                        <Stack sx={{ width: "100%" }} spacing={2}>
                            {notif.type === "error" &&
                                (
                                    <Alert severity="warning">
                                        <Typography variant="h6" p={1}>{notif.title}</Typography>
                                        <Typography variant="body1"> {notif.message} </Typography>
                                    </Alert>
                                )}
                            {notif.type === "success" &&
                                (
                                    <Alert severity="success">
                                        <Typography variant="h6" p={1}>{notif.title}</Typography>
                                        <Typography variant="body1"> {notif.message} </Typography>
                                    </Alert>
                                )}
                        </Stack>
                    </div>
                )}
        </>
    );
};

export default NotificationBar;
