import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Images from '../public/images/research';
import Image from 'next/image';
import { Box, Container } from '@mui/material';

// // const LightTooltip = styled(({ className, ...props }) => (
// //     <Tooltip {...props} classes={{ popper: className }} />
// // ))(({ theme }) => ({
// //     [`& .${tooltipClasses.tooltip}`]: {
// //         backgroundColor: theme.palette.common.white,
// //         color: 'rgba(0, 0, 0, 0.87)',
// //         boxShadow: theme.shadows[1],
// //         fontSize: 11,
// //     },
// // }));

// // const BootstrapTooltip = styled(({ className, ...props }) => (
// //     <Tooltip {...props} arrow classes={{ popper: className }} />
// // ))(({ theme }) => ({
// //     [`& .${tooltipClasses.arrow}`]: {
// //         color: theme.palette.common.black,
// //     },
// //     [`& .${tooltipClasses.tooltip}`]: {
// //         backgroundColor: theme.palette.common.black,
// //     },
// // }));

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        //# maxWidth: 600, fix this later 
        // fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
        fontFamily: 'Nunito',
    },
}));

export default function CustomizedTooltips() {
    return (
        <>
            <div>

                <HtmlTooltip
                    followCursor={true}
                    title={
                        <>
                            <Box>
                                <h3>Roadmap</h3>
                                <p className="parahover">The Innovation Roadmap is a representation of how scientific research moves from “bench to bedside,” specifically in the context of developing and commercializing new drug products. The Innovation Roadmap presents an alternative to the traditional drug pipeline model: it challenges the idea that scientific innovation and drug development is linear. The model allows for movement back and forth on the road, but also presents possibilities for alternative routes and travel methods to “hack” the roadmap and existing barriers to innovation.</p>
                            </Box>
                        </>
                    }
                >
                    <Container>
                        <Image src={Images.road00} alt="green grass background for many buildings" />
                    </Container>

                </HtmlTooltip>

            </div>

        </>
    );
}




