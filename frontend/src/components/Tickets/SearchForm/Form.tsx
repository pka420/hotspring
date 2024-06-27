import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../../store/geoSlice";
import { getEvents, getKeywordSuggestions } from "../../../store/ticketSlice";
import { AppDispatch, RootState } from "../../../store/store";
import EventList from "../EventList/EventList";
import { debounce } from "lodash";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import classes from "./Form.module.css";

const Form = () => {
    const dispatch: AppDispatch = useDispatch();
    const results = useSelector((state: RootState) => state.tickets.results);
    const isResultsLoading = useSelector((state: RootState) =>
        state.tickets.isResultsLoading
    );

    const location = useSelector((state: RootState) => state.geo.location);
    const suggestions = useSelector((state: RootState) =>
        state.tickets.suggestions
    );

    const categories = [
        "Music",
        "Sports",
        "Arts & Theatre",
        "Film",
        "Miscellaneous",
    ];

    const [state, setState] = React.useState<
        {
            keyword: string;
            distance: string;
            category: string;
            location: string;
            autoDetect: boolean;
            city: string;
        }
    >({
        keyword: "",
        distance: "10",
        category: "",
        location: "",
        autoDetect: false,
        city: "",
    });

    React.useEffect(() => {
        if (location.hasOwnProperty("city") && state.autoDetect) {
            setState({ ...state, city: location.city });
        }
        else {
            setState({ ...state, city: "" });
        }
    }, [location, state.autoDetect]);


    const handleAutoDetect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, autoDetect: event.target.checked, location: "" });
        if (event.target.checked) {
            dispatch(getLocation());
        }
    };

    const handleDistanceChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        try {
            let distance = 0;
            const inputValue = event.target.value.trim();
            if (inputValue === "") {
                setState((prevState) => ({
                    ...prevState,
                    distance: inputValue,
                }));
                return;
            }
            distance = parseInt(inputValue, 10);

            if (!inputValue || isNaN(distance) || distance < 0) {
                throw new Error("Invalid distance");
            }
            setState((prevState) => ({
                ...prevState,
                distance: distance.toString(),
            }));
        } catch (error) {
            //console.log(error);
        }
    };

    const debouncedSearch = debounce((searchTerm: string) => {
        dispatch(getKeywordSuggestions(searchTerm));
    }, 500);

    const handleKeywordChange = (value: string) => {
        setState({ ...state, keyword: value });
        debouncedSearch(value);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchEvents();
    };

    const fetchEvents = () => {
        const body = {
            location: state.location,
            distance: state.distance,
            category: state.category,
            keyword: state.keyword,
			location_type: "string",
        };

        if (state.autoDetect) {
            body.location = location.loc;
			body.location_type = "geo";
        }
        dispatch(getEvents(body));
    }


    const onClear = () => {
        setState({
            keyword: "",
            distance: "10",
            category: "",
            location: "",
            autoDetect: false,
            city: "",
        });
    };

    return (
        <>
            <Container
                component="main"
                maxWidth="md"
                className={classes.formContainer}
            >
                <div className={classes.paper}>
                    <Typography variant="h5" align="center">
                        Events Search
                    </Typography>
                    <Divider
                        style={{ margin: "20px 0", borderColor: "#fff" }}
                    />
                    <Box sx={{ flexGrow: 1 }} className={classes.form}>
                        <FormControl fullWidth>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <label htmlFor="keyword">Keyword</label>
                                    <Autocomplete
                                        fullWidth
                                        disablePortal
                                        id="keyword"
                                        value={state.keyword}
                                        options={suggestions}
                                        className={classes.formInput}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                            />
                                        )}
                                        onInputChange={(event, value) =>
                                            handleKeywordChange(value)}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <label htmlFor="distance">Distance</label>
                                    <TextField
                                        className={classes.formInput}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="distance"
                                        name="distance"
                                        placeholder="Enter distance in miles"
                                        value={state.distance}
                                        onChange={handleDistanceChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <label htmlFor="category">
                                            Category
                                        </label>
                                        <Select
                                            className={classes.formInput}
                                            id="category"
                                            fullWidth
                                            value={state.category}
                                            label="Age"
                                            onChange={(event) =>
                                                setState({
                                                    ...state,
                                                    category:
                                                        event.target.value,
                                                })}
                                        >
                                            {categories.map((category) => (
                                                <MenuItem
                                                    key={category}
                                                    value={category}
                                                >
                                                    {category}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <label htmlFor="location">Location</label>
                                    <TextField
                                        className={classes.formInput}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="location"
                                        name="location"
                                        placeholder="Enter location"
                                        value={state.location}
                                        disabled={state.autoDetect}
                                        onChange={(event) =>
                                            setState({
                                                ...state,
                                                location: event.target.value,
                                            })}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack
                                        direction="row"
                                        spacing={6}
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Button
                                            type="submit"
                                            size="large"
                                            variant="contained"
                                            onClick={onSubmit}
                                            color="primary"
                                        >
                                            SUBMIT
                                        </Button>
                                        <Button
                                            size="large"
                                            type="reset"
                                            variant="contained"
                                            color="error"
                                            onClick={onClear}
                                        >
                                            CLEAR
                                        </Button>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        label={"Auto-detect your location " + state.city}
                                        control={
                                            <Checkbox
                                                style={{ color: "#fff" }}
                                                checked={state.autoDetect}
                                                onChange={(event) =>
                                                    handleAutoDetect(event)}
                                            />
                                        }
                                    />
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Box>
                </div>
                <Backdrop
                    sx={{ color: "#fff", zIndex: 999 }}
                    open={isResultsLoading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Container>
            {results !== null && (
                results.hasOwnProperty("_embedded")
                    && (
                        <EventList
                            data={results}
                            title="Events"
                            fetchEvents={fetchEvents}
                        />
                    )
            )}
        </>
    );
};

export default Form;
