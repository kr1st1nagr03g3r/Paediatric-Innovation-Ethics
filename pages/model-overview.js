import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Navigation from '../components/Navigation'

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Navigation />
      <div>
        <Dialog
          open={true}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {/* <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle> */}
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <h3 className="title black">Model Overview</h3>

              <p className="black">
                Linear models of pharmaceutical innovation and commercialization
                are inadequate and did not capture the complexity of the data we
                acquired. For example, the classic “pipeline model” of drug
                development demonstrates the sequence of events necessary for
                translating basic research from “bench to bedside,” however it
                fails to account for the elaborate systems of communication,
                legal and regulatory framework, financial inputs and outputs,
                and scientific hurdles that shape and determine the path of
                innovation in this sector.
              </p>
              <p className="black">
                We use the metaphor of a roadmap to demonstrate that
                translational medicine occurs sequentially but not necessarily
                linearly. This overview of the road to pharmaceutical innovation
                visualizes the institutions along the route, the stakeholders
                moving along the road, and the roadblocks and bottlenecks that
                impede progress. This is an active ecosystem where the social
                and scientific are inherently enmeshed.
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              href="/model-overview/drug-discovery"
            >
              Continue to the Model Overview
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}
{
  /* <Container className="center">
        <h2 className="title">Model Overview</h2>

        <p className="para">Linear models of pharmaceutical innovation and commercialization are inadequate and did not capture the complexity of the data we acquired. For example, the classic “pipeline model” of drug development demonstrates the sequence of events necessary for translating basic research from “bench to bedside,” however it fails to account for the elaborate systems of communication, legal and regulatory framework, financial inputs and outputs, and scientific hurdles that shape and determine the path of innovation in this sector.
        </p>
        <p className="para">
          We use the metaphor of a roadmap to demonstrate that translational medicine occurs sequentially but not necessarily linearly. This overview of the road to pharmaceutical innovation visualizes the institutions along the route, the stakeholders moving along the road, and the roadblocks and bottlenecks that impede progress. This is an active ecosystem where the social and scientific are inherently enmeshed.
        </p>
      </Container> */
}
