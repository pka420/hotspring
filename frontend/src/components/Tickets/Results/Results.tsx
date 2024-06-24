import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import DataTable, { createTheme } from "react-data-table-component";
import classes from "./Results.module.css";
import { Box, Container, Typography } from "@mui/material";
import { formatDate } from "../../Utils/utils";
import SortIcon from "@mui/icons-material/ArrowDownward";
import EventDetails from "../EventDetails/EventDetails";

createTheme("solarized", {
    text: {
        primary: "#268bd2",
        secondary: "#2aa198",
    },
    background: {
        default: "#002b36",
    },
    context: {
        background: "#cb4b16",
        text: "#FFFFFF",
    },
    divider: {
        default: "#073642",
    },
    action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
    },
}, "dark");

interface TableColumn<T> {
    name: any;
    selector: (row: T) => any;
    sortable: boolean;
    cell?: (row: T) => any;
}

const Resutls = () => {
    const dispatch: AppDispatch = useDispatch();
    const results = useSelector((state: RootState) => state.tickets.results);

    const columns: TableColumn<any>[] = [
        {
            name: <Typography variant="h6">Date/Time</Typography>,
            selector: (row: any) => row.dates.start.dateTime,
            sortable: true,
            cell: (row: any) => (
                <Typography variant="body2">
                    {formatDate(row.dates.start.dateTime)}
                </Typography>
            ),
        },
        {
            name: <Typography variant="h6">Icon</Typography>,
            selector: (row: any) => row.images[0].url,
            sortable: false,
            cell: (row: any) => (
                <img
                    className={classes.iconImage}
                    src={row.images[0].url}
                    alt="icon"
                />
            ),
        },
        {
            name: <Typography variant="h6">Event</Typography>,
            selector: (row: any) => row.name,
            sortable: true,
            cell: (row: any) => (
                <Typography variant="body2">{row.name}</Typography>
            ),
        },
        {
            name: <Typography variant="h6">Genre</Typography>,
            selector: (row: any) => row.classifications[0].genre.name,
            sortable: true,
            cell: (row: any) => (
                <Typography variant="body2">
                    {row.classifications[0].genre.name}
                </Typography>
            ),
        },
        {
            name: <Typography variant="h6">Venue</Typography>,
            selector: (row: any) => row._embedded.venues[0].name,
            sortable: true,
            cell: (row: any) => (
                <Typography variant="body2">
                    {row._embedded.venues[0].name}
                </Typography>
            ),
        },
    ];

    return (
        <>
            <Box p={10}>
                <DataTable
                    title={<Typography variant="h4">Events</Typography>}
                    columns={columns}
                    data={results._embedded.events}
                    pagination
                    highlightOnHover
                    sortIcon={<SortIcon />}
                    expandableRows={true}
					expandableRowsComponent={ ({data}) => <EventDetails data={data} />}
                />
            </Box>
        </>
    );
};

export default Resutls;
