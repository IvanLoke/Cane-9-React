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
  const [page, setPage] = useState(0);
  const renderPage = (page) => {
    switch (page) {
      case 0:
        return <Card hobbies={patient["hobbies"] ? patient["hobbies"].join(", ") : ""} languages={patient["languages"] ? patient["languages"].join(", ") : ""} contact={caregiver["contact"]} address={patient["address"]} postalCode={patient["postalCode"]} patientAge={patient["age"]} caregiverRelationship={caregiver["relationship"]} caregiverName={caregiver["name"]} caregiverImage={caregiver["image"]} patientName={patient["name"]} patientImage={patient["image"]} />; 

      case 1:
        return <ChineseCard hobbies={patient["hobbies"] ? patient["hobbies"].join(", ") : ""} languages={patient["languages"] ? patient["languages"].join(", ") : ""} contact={caregiver["contact"]} address={patient["address"]} postalCode={patient["postalCode"]} patientAge={patient["age"]} caregiverRelationship={caregiver["relationship"]} caregiverName={caregiver["name"]} caregiverImage={caregiver["image"]} patientName={patient["name"]} patientImage={patient["image"]} />;

      case 2:
        return <MalayCard hobbies={patient["hobbies"] ? patient["hobbies"].join(", ") : ""} languages={patient["languages"] ? patient["languages"].join(", ") : ""} contact={caregiver["contact"]} address={patient["address"]} postalCode={patient["postalCode"]} patientAge={patient["age"]} caregiverRelationship={caregiver["relationship"]} caregiverName={caregiver["name"]} caregiverImage={caregiver["image"]} patientName={patient["name"]} patientImage={patient["image"]} />;

      case 3:
        return <TamilCard hobbies={patient["hobbies"] ? patient["hobbies"].join(", ") : ""} languages={patient["languages"] ? patient["languages"].join(", ") : ""} contact={caregiver["contact"]} address={patient["address"]} postalCode={patient["postalCode"]} patientAge={patient["age"]} caregiverRelationship={caregiver["relationship"]} caregiverName={caregiver["name"]} caregiverImage={caregiver["image"]} patientName={patient["name"]} patientImage={patient["image"]} />;
    
      default:
        return <Card hobbies={patient["hobbies"] ? patient["hobbies"].join(", ") : ""} languages={patient["languages"] ? patient["languages"].join(", ") : ""} contact={caregiver["contact"]} address={patient["address"]} postalCode={patient["postalCode"]} patientAge={patient["age"]} caregiverRelationship={caregiver["relationship"]} caregiverName={caregiver["name"]} caregiverImage={caregiver["image"]} patientName={patient["name"]} patientImage={patient["image"]} />;
    }
  }

  useEffect(() => {
    const fetchCaretakerInfo = async () => {
      console.log("fetching caretaker info...");
      const response = await fetch(`https://naiscbackend.vmpsg.xyz/caretaker/read?patientId=${patientId}`)
      const data = await response.json();
      console.log(data);
      setCaregiver(data);
    }
    const fetchPatientInfo = async () => {
      console.log("fetching patient info...");
      const response = await fetch(`https://naiscbackend.vmpsg.xyz/patient/read?patientId=${patientId}`);
      const data = await response.json();
      console.log(data);
      setPatient(data);
    }
    if (patientId) {
      console.log(patientId);
      fetchPatientInfo();
      fetchCaretakerInfo();
    }
  },[patientId]);

  return (
    <div className="flex bg-light-orange justify-center w-screen px-[12px]">
      <div className='flex flex-col w-full'>
        <Header setPage={setPage} />
        {
          renderPage(page)
        }
      </div>
    </div>
  )
}

export default App
