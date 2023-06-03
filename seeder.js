const mongoose = require('mongoose');

require('./src/db/connection');
const quiz = require('./src/models/quiz');

const seedQuestions = [
  {
    'title': 'Sports', 
    'prebuilt': true, 
    'duration': 15, 
    'marks': 15, 
    'result': [], 
    'level': 1,
    'question': [
    {
      'text': 'Who is the only Indian cricketer who has not score a double century in a One Day International (ODI) match?',
      'options': ['Sachin Tendulkar','Rohit Sharma', 'Virat Kohli', 'Virender Sehwag'],
      'answer': 'Virat Kohli',
    },
    {
      'text': 'Which Indian footballer was awarded the Arjuna Award in 2020?',
      'options': ['Sunil Chhetri','Gurpreet Singh Sandhu', 'Sandesh Jhingan', 'Anirudh Thapa'],
      'answer': 'Sunil Chhetri',
    },
    {
      'text': 'Who is the first Indian woman to win an Olympic medal in boxing?',
      'options': ['Mary Kom', 'Sarita Devi', 'Pooja Rani', 'Sakshi Malik'],
      'answer': 'Mary Kom',
    },
    {
      'text': 'In which year did India win its first Cricket World Cup?',
      'options': ['1975', '1983', '1992', '2007'],
      'answer': '1983',
    },
    {
      'text': 'Which Indian shooter won a gold medal in the 10m Air Rifle event at the 2021 Tokyo Olympics?',
      'options': ['Abhinav Bindra', 'Gagan Narang', 'Saurabh Chaudhary', 'Apurvi Chandela'],
      'answer': 'Saurabh Chaudhary',
    },
    {
      'text': 'Who holds the Indian record for the fastest century in Test cricket?',
      'options': ['Sachin Tendulkar', 'Virender Sehwag', 'Rahul Dravid', 'Virat Kohli'],
      'answer': 'Virender Sehwag',
    },
    {
      'text': 'Which Indian badminton player won the silver medal at the 2016 Rio Olympics?',
      'options': ['Saina Nehwal', 'P. V. Sindhu', 'Jwala Gutta', 'Ashwini Ponnappa'],
      'answer': 'P. V. Sindhu',
    },
    {
      'text': 'In which year did India win its first Olympic gold medal in hockey?',
      'options': ['1948', '1952', '1956', '1964'],
      'answer': '1948',
    },
    {
      'text': 'Who is the first Indian male athlete to win a gold medal in track and field at the Commonwealth Games?',
      'options': ['Neeraj Chopra', 'Milkha Singh', 'P. T. Usha', 'Anju Bobby George'],
      'answer': 'Milkha Singh',
    },
    {
      'text': 'Who is the first Indian female cricketer to score a century in T20 International matches?',
      'options': ['Mithali Raj', 'Smriti Mandhana', 'Harmanpreet Kaur', 'Jemimah Rodrigues'],
      'answer': 'Harmanpreet Kaur',
    },
    {
      'text': 'Which Indian cricketer has the highest individual score in T20 International matches?',
      'options': ['Sachin Tendulkar','Rohit Sharma', 'Virat Kohli', 'Virender Sehwag'],
      'answer': 'Rohit Sharma',
    },
    {
      'text': 'In which city is the Feroz Shah Kotla cricket stadium located?',
      'options': ['Mumbai', 'New Delhi', 'Kolkata', 'Chennai'],
      'answer': 'New Delhi',
    },
    {
      'text': 'Which Indian wrestler won a gold medal at the 2020 Tokyo Olympics in the men freestyle 57 kg category?',
      'options': ['Sushil Kumar', 'Yogeshwar Dutt', 'Bajrang Punia', 'Ravi Kumar Dahiya'],
      'answer': 'Ravi Kumar Dahiya',
    },
    {
      'text': 'Who is the first Indian male tennis player to reach the singles final of a Grand Slam tournament?',
      'options': ['Leander Paes', 'Mahesh Bhupathi', 'Sumit Nagal', 'Rohan Bopanna'],
      'answer': 'Sumit Nagal',
    },
    {
      'text': 'Which Indian athlete holds the national record for the long jump event?',
      'options': ['Anju Bobby George', 'Dutee Chand', 'Hima Das', 'Murali Sreeshankar'],
      'answer': 'Murali Sreeshankar',
    },
  ]
  },

  {
    'title': 'Sports', 
    'prebuilt': true, 
    'duration': 15, 
    'marks': 15, 
    'result': [], 
    'level': 2,
    'question': [
    {
      'text': 'Who is the highest run-scorer in international cricket?',
      'options': ['Sachin Tendulkar', 'Ricky Ponting', 'Virat Kohli', 'Brian Lara'],
      'answer': 'Sachin Tendulkar',
    },
    {
      'text': 'Which Indian cricketer has the most international wickets in cricket?',
      'options': ['Anil Kumble', 'Kapil Dev', 'Harbhajan Singh', 'Ravichandran Ashwin'],
      'answer': 'Anil Kumble',
    },
    {
      'text': 'Who won the ICC Mens Cricket World Cup in 2011?',
      'options': ['Australia', 'India', 'England', 'South Africa'],
      'answer': 'India',
    },
    {
      'text': 'Who is the first Indian to score a double century in Test cricket?',
      'options': ['Sachin Tendulkar', 'Rahul Dravid', 'Virender Sehwag', 'Sunil Gavaskar'],
      'answer': 'Virender Sehwag',
    },
    {
      'text': 'Which Indian boxer won a bronze medal at the 2008 Beijing Olympics?',
      'options': ['Vijender Singh', 'Mary Kom', 'Sushil Kumar', 'Akhil Kumar'],
      'answer': 'Vijender Singh',
    },
    {
      'text': 'Who is the first Indian to win an individual gold medal at the Olympic Games?',
      'options': ['Abhinav Bindra', 'Sushil Kumar', 'Leander Paes', 'P. V. Sindhu'],
      'answer': 'Abhinav Bindra',
    },
    {
      'text': 'Which tennis player won the Wimbledon mens singles title in 2021?',
      'options': ['Leander Paes', 'Mahesh Bhupathi', 'Rohan Bopanna', 'Novak Djokovic'],
      'answer': 'Novak Djokovic',
    },
    {
      'text': 'Who is the only Indian to win an Olympic medal in a racquet sport?',
      'options': ['Saina Nehwal', 'P. V. Sindhu', 'Sania Mirza', 'Leander Paes'],
      'answer': 'P. V. Sindhu',
    },
    {
      'text': 'Which Indian athlete won the gold medal in the women javelin throw at the 2020 Tokyo Olympics?',
      'options': ['Hima Das', 'Dutee Chand', 'Neeraj Chopra', 'Kamalpreet Kaur'],
      'answer': 'Kamalpreet Kaur',
    },
    {
      'text': 'Who is the first Indian to score a triple century in Test cricket?',
      'options': ['Sachin Tendulkar','Karun Nair', 'Virat Kohli', 'Virender Sehwag'],
      'answer': 'Virender Sehwag',
    },
    {
      'text': 'Who is the captain of the Indian men cricket team in Test matches as of 2021?',
      'options': [' Rohit Sharma', 'Virat Kohli', 'Ajinkya Rahane', 'Cheteshwar Pujara'],
      'answer': 'Virat Kohli',
    },
    {
      'text': 'Which Indian hockey player is known as the "Wizard of Hockey"?',
      'options': ['Dhyan Chand', 'Balbir Singh Sr.', 'Dhanraj Pillay', 'Sardar Singh'],
      'answer': 'Dhyan Chand',
    },
    {
      'text': 'Who is the only Indian to win a Grand Slam singles title in tennis?',
      'options': ['Sania Mirza', 'Leander Paes', 'Mahesh Bhupathi', 'Sumit Nagal'],
      'answer': 'Leander Paes',
    },
    {
      'text': 'Which Indian athlete won the gold medal in the men long jump at the 2020 Tokyo Olympics?',
      'options': ['Neeraj Chopra', 'Bajrang Punia', 'Sandeep Tomar', 'M. Sreeshankar'],
      'answer': 'M. Sreeshankar',
    },
    {
      'text': 'Who is the first Indian woman to win a silver medal at the Paralympic Games?',
      'options': ['Deepa Malik', 'Devendra Jhajharia', 'Mariyappan Thangavelu', 'Bhavina Patel'],
      'answer': 'Murali Sreeshankar',
    },
  ]
  },
  {
    'title': 'Technical', 
    'prebuilt': true, 
    'duration': 15, 
    'marks': 15, 
    'result': [], 
    'level': 1,
    'question': [
    {
      'text': 'Which Indian engineer is known as the "Father of the Indian Software Industry?',
      'options': ['Narinder Singh Kapany', 'Vinod Dham', 'F. C. Kohli', 'Sam Pitroda'],
      'answer': 'F. C. Kohli',
    },
    {
      'text': 'Which Indian city is known as the "Electronic City of India" due to its prominent information technology industry?',
      'options': ['Hyderabad', 'Pune', 'Bengaluru', 'Chennai'],
      'answer': 'Bengaluru',
    },
    {
      'text': 'Which Indian company developed the supercomputer named "Param"?',
      'options': ['TCS', 'Wipro', 'Infosys', 'C-DAC'],
      'answer': 'C-DAC',
    },
    {
      'text': 'Who is known as the "Father of Indian Telecommunication"?',
      'options': ['A. P. J. Abdul Kalam', 'Satish Dhawan', 'Sam Pitroda', 'N. R. Narayana Murthy'],
      'answer': 'Sam Pitroda',
    },
    {
      'text': 'Which Indian engineer is credited with inventing the optical fiber technology?',
      'options': ['Sam Pitroda', 'Narinder Singh Kapany', 'Vinod Dham', 'F. C. Kohli'],
      'answer': 'Narinder Singh Kapany',
    },
    {
      'text': 'Which Indian city is home to the headquarters of the Tata Group, one of India largest conglomerates?',
      'options': ['Mumbai', 'New Delhi', 'Kolkata', 'Bengaluru'],
      'answer': 'Mumbai',
    },
    {
      'text': 'Who is the co-founder of the Indian IT company, Infosys?',
      'options': ['Mukesh Ambani', 'Azim Premji', 'N. R. Narayana Murthy', 'Shiv Nadar'],
      'answer': 'N. R. Narayana Murthy',
    },
    {
      'text': 'Which Indian engineer and entrepreneur is known as the "Father of the Indian Supercomputer"?',
      'options': ['Vijay P. Bhatkar', 'Kiran Mazumdar-Shaw', 'Aditi Pant', 'Ashok Jhunjhunwala'],
      'answer': 'Vijay P. Bhatkar',
    },
    {
      'text': 'What does the abbreviation "ISRO" stand for?',
      'options': ['Indian Space Research Organization', 'Indian Scientific Research Office', 'Indian Satellite Research Organization', 'Indian Spacecraft and Rocket Organization'],
      'answer': 'Indian Space Research Organization',
    },
    {
      'text': 'Who is the co-founder of the Indian e-commerce company, Flipkart?',
      'options': ['Sachin Bansal', 'Binny Bansal', 'Kunal Bahl', 'Rohit Bansal'],
      'answer': 'Sachin Bansal',
    },
    {
      'text': 'Which Indian engineer is known as the "Missile Woman of India"?',
      'options': ['Tessy Thomas', 'Nandini Harinath', 'Swati Mohan', 'Geeta Varadan'],
      'answer': 'Tessy Thomas',
    },
    {
      'text': 'Which Indian city is home to the headquarters of the Indian IT company, Wipro?',
      'options': ['Mumbai', 'New Delhi', 'Bengaluru', 'Chennai'],
      'answer': 'Bengaluru',
    },
    {
      'text': 'Who is the co-founder of the Indian IT company, HCL Technologies?',
      'options': ['N. R. Narayana Murthy', 'Shiv Nadar', 'Azim Premji','Vineet Nayar'],
      'answer': 'Shiv Nadar',
    },
    {
      'text': 'Which Indian engineer is known for his pioneering work in fiber optics and solar energy?',
      'options': ['Narinder Singh Kapany', 'Vinod Dham', 'F. C. Kohli', 'Sam Pitroda'],
      'answer': 'Narinder Singh Kapanyr',
    },
    {
      'text': 'Which Indian city is known as the "Science City of India" due to its numerous research institutions and scientific organizations?',
      'options': ['Kolkata','Chennai', 'Hyderabad', 'Mumbai'],
      'answer': 'Kolkata',
    },
  ]
  },
  {
    'title': 'Technical', 
    'prebuilt': true, 
    'duration': 15, 
    'marks': 15, 
    'result': [], 
    'level': 2,
    'question': [
    {
      'text': 'Which Indian scientist is known as the "Father of the Indian Space Program"?',
      'options': ['A. P. J. Abdul Kalam', 'Homi J. Bhabha', 'Vikram Sarabhai', 'C. V. Raman'],
      'answer': 'Vikram Sarabhai',
    },
    {
      'text': 'Which Indian city is home to the headquarters of the Indian Space Research Organisation ',
      'options': ['Mumbai', 'New Delhi', 'Bengaluru', 'Chennai'],
      'answer': 'Bengaluru',
    },
    {
      'text': 'Who is the Indian mathematician who introduced the concept of zero?',
      'options': ['Aryabhata', 'Srinivasa Ramanujan', 'Brahmagupta', 'Bhaskara II'],
      'answer': 'Aryabhata',
    },
    {
      'text': 'What is the unit of measurement for electrical resistance?',
      'options': ['Ampere', 'Volt', 'Ohm', 'Watt'],
      'answer': 'Ohm',
    },
    {
      'text': 'Which Indian physicist won the Nobel Prize in Physics for his discovery of the Raman Effect?',
      'options': ['C. V. Raman', 'Homi J. Bhabha', 'Satyendra Nath Bose', 'Har Gobind Khorana'],
      'answer': 'C. V. Raman',
    },
    {
      'text': 'Which Indian city is known as the "Silicon Valley of India" due to its thriving information technology industry?',
      'options': ['Mumbai', 'Hyderabad', 'Bengaluru', 'Chennai'],
      'answer': 'Bengaluru',
    },
    {
      'text': 'What is the chemical symbol for the element gold?',
      'options': ['Gd', 'Au', 'Ag', 'Pt'],
      'answer': 'Au',
    },
    {
      'text': 'Who developed the first indigenous satellite launch vehicle of India, named SLV-3?',
      'options': ['Vikram Sarabhai', 'A. P. J. Abdul Kalam', 'Homi J. Bhabha', 'S. Nambi Narayanan'],
      'answer': 'Vikram Sarabhai',
    },
    {
      'text': 'Which Indian river is known as the "Sorrow of Bihar" due to its frequent flooding?',
      'options': ['Yamuna', 'Ganga', 'Brahmaputra', 'Kaveri'],
      'answer': 'Ganga',
    },
    {
      'text': 'What is the chemical formula for water?',
      'options': ['H2O2', 'H2SO4', 'CO2', 'H2O'],
      'answer': 'H2O',
    },
    {
      'text': 'Who is the Indian scientist who won the Nobel Prize in Physics for his discovery of the Raman scattering effect?',
      'options': ['C. V. Raman', 'Hargobind Khorana', 'S. Chandrasekhar', 'Venkatraman Ramakrishnan'],
      'answer': 'C. V. Raman',
    },
    {
      'text': 'Which Indian hockey player is known as the "Wizard of Hockey"?',
      'options': ['Mumbai', 'Bengaluru', 'Chennai', 'Kolkata'],
      'answer': 'Mumbai',
    },
    {
      'text': 'What is the chemical symbol for the element iron?',
      'options': ['Fe', 'I', 'Ir', 'In'],
      'answer': 'Fe',
    },
    {
      'text': 'Who is the Indian scientist known for his contributions to the field of astrophysics and for his work on cosmic rays?',
      'options': ['Meghnad Saha', 'Har Gobind Khorana', 'Subrahmanyan Chandrasekhar', 'Jagdish Chandra Bose'],
      'answer': 'Meghnad Saha',
    },
    {
      'text': 'Who is the first Indian woman to win a silver medal at the Paralympic Games?',
      'options': ['Aryabhata', 'Brahmagupta', 'Bhaskara II', 'Srinivasa Ramanujan'],
      'answer': ' Brahmagupta',
    },
  ]
  },

    {
    'title': 'Medical', 
    'prebuilt': true, 
    'duration': 15, 
    'marks': 15, 
    'result': [], 
    'level': 1,
    'question': [
    {
      'text': 'Which Indian physician is known as the "Father of Indian Surgery"?',
      'options': ['Sushruta', 'Charaka', 'Dhanvantari', 'Jivaka'],
      'answer': 'Sushruta',
    },
    {
      'text': 'Which Indian city is home to the All India Institute of Medical Sciences (AIIMS)?',
      'options': ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
      'answer': 'New Delhi',
    },
    {
      'text': 'What is the normal body temperature in degrees Celsius?',
      'options': ['35°C', '36°C', '37°C', '38°C'],
      'answer': '37°C',
    },
    {
      'text': 'Which Indian scientist won the Nobel Prize in Physiology or Medicine for the discovery of the malaria parasite in 1902?',
      'options': ['Har Gobind Khorana', 'Chandrasekhara Venkata Raman', 'Ronald Ross', 'Shinya Yamanaka'],
      'answer': 'Ronald Ross',
    },
    {
      'text': 'Which disease, caused by a bacteria, is known as the "White Plague" in India?',
      'options': ['Tuberculosis', 'Cholera', 'Dengue Fever', 'Malaria'],
      'answer': 'Tuberculosis',
    },
    {
      'text': 'Which Indian doctor is credited with the development of the Rotavirus vaccine?',
      'options': ['Gagandeep Kang', 'Indra Chakravarty', 'Devi Shetty', 'Sunil Kumar Hebbi'],
      'answer': 'Gagandeep Kang',
    },
    {
      'text': 'Which Indian city is known as the "Diabetes Capital of India"?',
      'options': ['Kolkata', 'Bengaluru', 'Hyderabad', 'Chennai'],
      'answer': 'Hyderabad',
    },
    {
      'text': 'What is the main function of the cochlea?',
      'options': ['Vision', 'Smell', 'Taste', 'Hearing'],
      'answer': 'Hearing',
    },
    {
      'text': 'Who is known as the "Father of Plastic Surgery" in India?',
      'options': ['Sushruta', 'Charaka', 'Dhanvantari', 'Jivaka'],
      'answer': 'Sushruta',
    },
    {
      'text': 'Which vitamin is synthesized in the skin when exposed to sunlight?',
      'options': ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'],
      'answer': 'Vitamin D',
    },
    {
      'text': 'Which Indian doctor was awarded the Nobel Prize in Physiology or Medicine for his work on the mechanism of the human circulatory system?',
      'options': ['Har Gobind Khorana', 'Chandrasekhara Venkata Raman', 'C. V. Raman', 'B. C. Roy'],
      'answer': 'B. C. Roy',
    },
    {
      'text': 'Which Indian state is known for its traditional system of medicine, Ayurveda?',
      'options': ['Kerala', 'Tamil Nadu', 'Rajasthan', 'Maharashtra'],
      'answer': 'Kerala',
    },
    {
      'text': 'What is the medical term for the inflammation of the appendix?',
      'options': ['Appendicitis', 'Arthritis', 'Hepatitis', 'Bronchitis'],
      'answer': 'Appendicitis',
    },
    {
      'text': 'Which Indian scientist is known for his pioneering work in the field of in-vitro fertilization (IVF)?',
      'options': ['Subramanian Ramadorai', 'Indra Chakravarty', 'Sam Pitroda', 'Gagandeep Kang'],
      'answer': 'Indra Chakravarty',
    },
    {
      'text': 'Which Indian doctor is known as the "Heart Man of India" for his contribution to the field of cardiac surgery?',
      'options': ['Devi Shetty', 'B. C. Roy', 'Randeep Guleria', 'Sunil Kumar Hebbi'],
      'answer': 'Devi Shetty',
    },
  ]
  },

  {
    'title': 'Medical', 
    'prebuilt': true, 
    'duration': 15, 
    'marks': 15, 
    'result': [], 
    'level': 2,
    'question': [
    {
      'text': 'Who discovered the anti-leprosy drug, Clofazimine?',
      'options': ['Hargobind Khorana', 'Yellapragada Subbarow', 'G. N. Ramachandran', 'Venkatraman Ramakrishnan'],
      'answer': 'Yellapragada Subbarow',
    },
    {
      'text': 'Which Indian doctor is known for his research and advocacy in the field of tobacco control?',
      'options': ['Prakash C. Gupta', 'Rajendra Prasad', 'C. V. Raman', 'Shanti Swarup Bhatnagar'],
      'answer': 'Prakash C. Gupta',
    },
    {
      'text': 'What is the full form of AIDS?',
      'options': ['Acquired Immunodeficiency Syndrome', 'Acute Inflammatory Disease Syndrome', 'Autoimmune Infection Detection System', 'Autoimmune Immunodeficiency Syndrome'],
      'answer': 'Acquired Immunodeficiency Syndrome',
    },
    {
      'text': 'Who discovered the antibiotic streptomycin, which was effective against tuberculosis?',
      'options': ['Vinod Dham', 'Vinod Khosla', 'Raj Reddy', 'Selman Waksman'],
      'answer': 'Selman Waksman',
    },
    {
      'text': 'Which Indian city is home to the National Institute of Mental Health and Neurosciences (NIMHANS)?',
      'options': ['Bengaluru', 'Kolkata', 'Mumbai', 'Chennai'],
      'answer': 'Bengaluru',
    },
    {
      'text': 'Which Indian doctor is known for his pioneering work in the field of in vitro fertilization (IVF)?',
      'options': ['B. C. Roy', 'Subhash Mukhopadhyay', 'Indira Hinduja', 'P. Venugopal'],
      'answer': 'Subhash Mukhopadhyay',
    },
    {
      'text': 'Which Indian doctor is known as the "Father of Indian Pharmacology"?',
      'options': ['M. S. Swaminathan', 'Upendra K. Kulkarni', 'Mahendra Lal Sircar', 'Madhav Gadgil'],
      'answer': 'Mahendra Lal Sircar',
    },
    {
      'text': 'Who discovered the causative agent of dengue fever?',
      'options': ['Albert Calmette', 'Walter Reed', 'David Baltimore', 'Albert Sabin'],
      'answer': 'Walter Reed',
    },
    {
      'text': 'In which year was the first successful kidney transplant performed in India?',
      'options': ['1954', '1965', '1971', '1982'],
      'answer': '1971',
    },
    {
      'text': 'Which Indian doctor won the Nobel Prize in Physiology or Medicine for his work on the mechanism of action of cholera and tuberculosis?',
      'options': ['Har Gobind Khorana', 'Venkatraman Ramakrishnan', 'Hargobind Khorana', 'S. Chandrasekhar'],
      'answer': 'Hargobind Khorana',
    },
    {
      'text': 'Who discovered the malarial parasite in human blood, leading to the development of effective treatment for malaria?',
      'options': ['Ronald Ross', 'Jagdish Chandra Bose', 'Vikram Sarabhai', 'Shanti Swarup Bhatnagar'],
      'answer': 'Ronald Ross',
    },
    {
      'text': 'Which Indian city is home to the All India Institute of Medical Sciences (AIIMS)?',
      'options': ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
      'answer': 'Delhi',
    },
    {
      'text': 'What is the official symbol of the World Health Organization (WHO)?',
      'options': ['Caduceus', 'Rod of Asclepius', 'Red Cross', 'Blue Cross'],
      'answer': 'Rod of Asclepius',
    },
    {
      'text': 'Which Indian physician and freedom fighter was the first to perform a successful human-to-human heart transplant in India?',
      'options': ['B. C. Roy', 'P. Venugopal', 'Rajendra Prasad', 'Devi Prasad Shetty'],
      'answer': 'P. Venugopal',
    },
    {
      'text': 'Who is known as the "Father of Indian Surgery"?',
      'options': ['Charaka', 'Sushruta', 'Dhanvantari', 'Vagbhata'],
      'answer': 'Sushruta',
    },
  ]
  },

];

const seedDB = async () => {
  await quiz.insertMany(seedQuestions);

  console.log('Seeding process completed!!')
};

seedDB().then(() => {
  mongoose.connection.close();
});