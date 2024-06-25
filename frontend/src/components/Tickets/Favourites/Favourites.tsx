import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store/store";
import SortIcon from "@mui/icons-material/Sort";
import DataTable from "react-data-table-component";
import { formatDate } from "../../Utils/utils";
import DeleteIcon from "@mui/icons-material/Delete";
import { getFavourites, deleteFavourite } from "../../../store/ticketSlice";


interface TableColumn<T> {
    name: any;
    selector: (row: T) => any;
    sortable: boolean;
    cell?: (row: T) => any;
}


const Favourites = () => {
    const favourites = useSelector((state: RootState) => state.tickets.favourites);
    const dispatch: AppDispatch = useDispatch();

    const columns: TableColumn<any>[] = [
        {
            name: <Typography variant="h6">Date/Time</Typography>,
            selector: (row: any) => row.date,
            sortable: true,
            cell: (row: any) => (
                <Typography variant="body2">
                    {formatDate(row.date)}
                </Typography>
            ),
        },
        {
            name: "Event Id",
            selector: (row) => row.event_id,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Category",
            selector: (row) => row.category,
            sortable: false,
        },
        {
            name: "Venue",
            selector: (row) => row.venue,
            sortable: false,
        },
        {
            name: "Action",
            selector: (row) => row.event_id,
            sortable: false,
            cell: (row) => (
                <IconButton
                    onClick={handleDeleteFavourite(row.event_id)}
                >
                    <DeleteIcon />
                </IconButton>
            ),
        },
    ];

    const handleDeleteFavourite = (event_id: string) => () => {
        dispatch(deleteFavourite(event_id)).unwrap().then(() => {
            dispatch(getFavourites());
        }).catch((error) => console.log(error));
    }


    return (
		<>
            <Box sx={{ width: "100%"}}>
                { favourites.length === 0
                    ? <Typography variant="h6" color="error">No favourites saved</Typography>
                        :
        <>
            <Box p={10}>
                <DataTable
                    title={<Typography variant="h4">Favourites</Typography>}
                    columns={columns}
                    data={favourites}
                    pagination
                    highlightOnHover
                    sortIcon={<SortIcon />}
                    expandableRows={false}
                />
            </Box>
        </>
                }
            </Box>
		</>
    );
}

export default Favourites;
