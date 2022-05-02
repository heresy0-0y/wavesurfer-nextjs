import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import dynamic from "next/dynamic";

// , {method: 'GET', cacheControl: 'max-age=31536000', mode: 'no-cors', site: 'cross-site', redirect: 'follow', referrerPolicy: 'strict-origin-when-cross-origin', accept: '*/*', dest: 'audio'}
const testUrl = "https://static.inaturalist.org/sounds/342100.m4a";
const testStatic='/342100.mp4'
const Songs = () => {
  const Waveform = dynamic(() => import("./Waveform"), { ssr: false });

  const [songs, setSongs] = useState(false);

  return (
    <>
      <Box w="100%">
        <Waveform url={testStatic /* or testUrl*/} />
      </Box>
    </>
  );
};

export default Songs;
