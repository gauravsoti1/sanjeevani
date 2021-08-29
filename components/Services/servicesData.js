const servicesData = [
  {
    name: 'Orthopedics & Spine',
    img: '/ortho.png',
    imgWidth: '215px',
    imgHeight: '185px',
    details:
      'We specialize in arthroscopy, dealing with trauma recovery, spinal injuries and complicated joint replacement, all performed here to make sure that you derive',
  },
  {
    name: 'Diabetes/ Critical Care/ Internal Medicine',
    img: '/diabetics.png',
    imgWidth: '215px',
    imgHeight: '185px',
    details:
      'We specialize in treatment and management of diabetes mellitus, hypertension, and thyroid disorders. We have been successfully dealing',
  },
  {
    name: 'Dermatology',
    img: '/dermatology.png',
    imgWidth: '215px',
    imgHeight: '185px',
    details:
      'We have successfully treated all forms of disfigurements including skin cancers and melanoma to acne and skin related problems such as eczema, acne, leucoderma',
  },
  {
    name: 'Nephrology & Urology',
    img: '/nephrology.png',
    imgWidth: '215px',
    imgHeight: '185px',
    details:
      'We offer the full spectrum of diagnostics and treatment for urology cancers, prostate diseases, laparoscopic urology, reconstructive',
  },
  {
    name: 'General & Laparoscopic Surgery',
    img: '/surgery.png',
    imgWidth: '256px',
    imgHeight: '256px',
    details:
      'The skilled surgeons at Sanjeevani Plus hospital are dedicated to providing the most advanced laparoscopic & general surgical procedures',
  },
  {
    name: 'Physiotherapy & Rehabilitation',
    img: '/physiotherapy.png',
    imgWidth: '215px',
    imgHeight: '185px',
    details:
      'The physiotherapist at Sanjeevani Plus Hospital aesthetically treat the pain, improve balance, posture. It helps restore the body strength post illness',
  },
  {
    name: 'Psychiatry',
    img: '/psychiatry.png',
    imgWidth: '215px',
    imgHeight: '185px',
    details:
      'Depression and Bipolar Disorder,Anxiety disorders like OCD, Panic disorder, Situational anxiety for - eg. Exam phobia,Substance abuse or addiction',
  },
  {
    name: 'Chest & Tuberculosis',
    img: '/lungs.png',
    imgWidth: '215px',
    imgHeight: '185px',
    details:
      'Tuberculosis (TB) is an airborne infectious disease caused by the tubercle bacillus. TB cases can be broadly classified as "open" and "non-open" ',
  },
  {
    name: 'Dietetics & Nutrition',
    img: '/dietetics.png',
    imgWidth: '215px',
    imgHeight: '185px',
    details:
      'A balanced nutrition is essential for a good health, physical growth, and development, as well to regulate the basic body processes',
  },
  {
    name: 'Cardiology',
    img: '/cardiology.png',
    imgWidth: '256px',
    imgHeight: '256px',
    details:
      'Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular',
  },
  {
    name: 'General Medicine',
    img: '/physician.png',
    imgWidth: '200px',
    imgHeight: '200px',
    details:
      'General Physicians are highly trained specialists who provide a range of non-surgical health care to adult patients. They care for difficult, serious.',
  },
];

export default servicesData.sort((a, b) => a.name.localeCompare(b.name));
