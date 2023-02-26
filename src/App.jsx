import { useLocation } from 'react-router-dom'
import Card from './components/Card'
import ChineseCard from './components/ChineseCard'
import MalayCard from './components/MalayCard'
import TamilCard from './components/TamilCard'
import Header from './components/Header'
import React, { useEffect, useMemo, useState } from 'react';

// Initialize Firebase
function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  const query = useQuery();
  const patientId = query.get("id");

  const [patient, setPatient] = useState({});
  const [caregiver, setCaregiver] = useState({});

  useEffect(() => {
    const fetchCaretakerInfo = async () => {
      const response = await fetch(`http://13.250.60.0:3000/caretaker/read?patientId=${patientId}`)
      const data = await response.json();
      console.log(data);
      setCaregiver(data);
    }
    const fetchPatientInfo = async () => {
      const response = await fetch(`http://13.250.60.0:3000/patient/read?patientId=${patientId}`);
      const data = await response.json();
      console.log(data);
      setPatient(data);
    }
    if (patientId) {
      fetchPatientInfo();
      fetchCaretakerInfo();
    }
  },[patientId]);

  return (
    <div className="flex h-screen bg-light-orange justify-center w-screen px-[12px]">
      <div className='flex flex-col w-full'>
        <Header />
        <ChineseCard caregiverName={caregiver["name"]} caregiverImage={caregiver["image"]} patientName={patient["name"]} patientImage={patient["image"]}/>
      </div>
    </div>
  )
}

export default App
