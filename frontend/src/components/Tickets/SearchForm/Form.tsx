import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../../store/geoSlice";
import { getEvents, getKeywordSuggestions } from "../../../store/ticketSlice";
import { AppDispatch, RootState } from "../../../store/store";
import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import classes from "./Form.module.css";

const Form = () => {
    const dispatch: AppDispatch = useDispatch();

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
            distance: number;
            category: string;
            location: string;
            autoDetect: boolean;
        }
    >({
        keyword: "",
        distance: 10,
        category: "",
        location: "",
        autoDetect: false,
    });

    const handleAutoDetect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, autoDetect: event.target.checked, location: "" });
        if (event.target.checked) {
            dispatch(getLocation());
        }
    };

    const handleKeywordChange = (value: string) => {
        console.log("handleKeywordChange");
        console.log(value);
        setState({ ...state, keyword: value });
        dispatch(getKeywordSuggestions(value));
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(state);
        dispatch(getEvents(state));
    };

    return (
        <>
            <Container
                component="main"
                maxWidth="md"
                className={classes.formContainer}
            >
                <Paper elevation={0} className={classes.paper}>
                    <Typography variant="h5" align="center">
                        Events Search
                    </Typography>
                    <div className={classes.underline} />
                    <Box sx={{ flexGrow: 1 }} className={classes.form}>
                        <FormControl fullWidth>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        fullWidth
                                        disablePortal
                                        id="keyword"
                                        value={state.keyword}
                                        options={suggestions}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Keyword"
                                            />
                                        )}
                                        onInputChange={(event, value) =>
                                            handleKeywordChange(value)}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="distance"
                                        label="Distance (miles)"
                                        name="distance"
                                        placeholder="Enter distance in miles"
                                        value={state.distance}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Category</InputLabel>
                                        <Select
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
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="location"
                                        label="Location"
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
                                    <Stack direction="row" spacing={6}>
                                        <Button
                                            type="submit"
                                            size="medium"
                                            variant="contained"
                                            color="primary"
                                            onClick={onSubmit}
                                        >
                                            SUBMIT
                                        </Button>
                                        <Button
                                            size="medium"
                                            type="reset"
                                            variant="outlined"
                                            color="primary"
                                        >
                                            CLEAR
                                        </Button>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        label="Auto-detect your location"
                                        control={
                                            <Checkbox
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
                </Paper>
            </Container>
        </>
    );
};

export default Form;
