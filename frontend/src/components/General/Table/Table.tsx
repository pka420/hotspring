import { IconButton, Paper } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React from "react";

const Linear = () => (
    <div style={{ width: "100%" }}>
        <LinearProgress color="primary" />
    </div>
);

const MyTable = () => {
    const [state, setState] = React.useState<{
        noHeader: boolean;
        selectedRows: any[];
        selectedUserName: any[];
        clearSelectedRows: boolean;
        currentRow: any;
    }>({
        noHeader: true,
        selectedRows: [],
        selectedUserName: [],
        clearSelectedRows: false,
        currentRow: null,
    });

    return (
        <>
        </>
    );
}

export default MyTable;
