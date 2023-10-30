// import Image from 'next/image'
import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homeContaints">
      <h1 className="title">セルフレジのデモ</h1>
      <Button variant="outlined" size="large" component={Link} to="/">
        スタート
      </Button>
    </div>
  )
}
