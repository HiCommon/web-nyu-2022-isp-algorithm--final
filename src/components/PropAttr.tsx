import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';


export default function PropAttrField({propAttr,setPropAttr,setTrig }) {
    // const [id, setId] = React.useState(null);
    // const [home, setHome] = React.useState("");

    // const handleIdChange = (event) => {
    //     setIdSelected(event.target.value);
    // };

    // const handleHomeChange = (event) => {
    //     setHome(event.target.value);
    // };

    const handleClick = (event) => {
        setTrig(true)
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '20ch' },
            }}
            noValidate
            autoComplete="off"
            justifyContent="center"
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>Property Attributes</div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <TextField
                    id="input-zipcode"
                    label="ID"
                    size="small"
                    value={propAttr.id}
                    // onChange={handleIdChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <TextField
                    id="input-zipcode"
                    label="Home Name"
                    size="small"
                    value={propAttr.home_name}
                    // onChange={handleHomeChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <TextField
                  label="Home Brand"
                  size="small"
                  value={propAttr.brand}
                  InputLabelProps={{
                      shrink: true,
                  }}
                />
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Button
                  variant="outlined"
                  // onClick={handleClick}
                >
                    Update
                </Button>
            </div>
        </Box >
    );
}