import { Container, Grid, Card, CardHeader, CardContent, CardActions, Button  } from '@mui/material';

export function RoutinesPage() {
    const routines = [{
            "name": "Routine Greenlam 1",
            "dateStart": "2/22/2022"
        }, {
            "name": "Routine Kanlam",
            "dateStart": "12/13/2021"
        }, {
            "name": "Routine Lotlux",
            "dateStart": "10/25/2020"
        }, {
            "name": "Routine Tres-Zap",
            "dateStart": "8/31/2019"
        }, {
            "name": "Routine Stronghold",
            "dateStart": "4/7/2023"
        }, {
            "name": "Routine Zoolab",
            "dateStart": "9/30/2020"
        }, {
            "name": "Routine 2",
            "dateStart": "10/9/2022"
        }, {
            "name": "Routine Zontrax",
            "dateStart": "3/6/2023"
        }, {
            "name": "Routine Daltfresh",
            "dateStart": "5/11/2023"
        }, {
            "name": "Routine Redhold",
            "dateStart": "11/24/2022"
        }, {
            "name": "Routine Greenlam 2",
            "dateStart": "11/23/2022"
        }, {
            "name": "Routine Bytecard",
            "dateStart": "6/14/2021"
        }, {
            "name": "Routine Flowdesk",
            "dateStart": "9/13/2019"
        }, {
            "name": "Routine Bamity",
            "dateStart": "7/8/2021"
        }, {
            "name": "Routine Alpha",
            "dateStart": "8/14/2021"
    }]

    return (
        <Container>
            <Grid container spacing={1} flexWrap="wrap">
                {routines.map(routine => (
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 200 }}>
                            <CardHeader title={routine.name}/>
                            <CardContent>Start Date: {routine.dateStart}</CardContent>
                            <CardActions>
                                <Button size='small'>Details</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}