import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext()

export const StateContext = ({ children }) => {

}

export const useStateContext = useContext(Context)