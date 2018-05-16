# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Tasker.destroy_all
Location.destroy_all
Category.destroy_all
Size.destroy_all
Vehicle.destroy_all
TimeSlot.destroy_all
CategoryRegistration.destroy_all
VehicleRegistration.destroy_all
SizeRegistration.destroy_all

sizes = [
  Size.create!({title: 'Small'}),
  Size.create!({title: 'Medium'}),
  Size.create!({title: 'Large'})
]

vehicles = [
  Vehicle.create!({title: 'none'}),
  Vehicle.create!({title: 'car'}),
  Vehicle.create!({title: 'truck'})
]

category_titles =
[
  'Mounting & Installation',
  'Moving & Packing',
  'Furniture Assembly',
  'Home Improvement',
  'General Handyman',
  'Heavy Lifting'
]
  # 'Grocery Shopping',
  # 'General Cleaning',
  # 'Research',
  # 'Event Marketing'
  # 'Pet Sitting',
  # 'Graphic Design',
  # 'Painting',
  # 'Carpentry & Construction',
  # 'Electrical Work',
  # 'Hang Pictures',
  # 'Plumbing',
  # 'Light Installation',
  # 'Yard Work',
  # 'Event Staffing',
  # 'Bartending',
  # 'Cooking',
  # 'Automotive Help',
  # 'Deep Cleaning',
  # 'Photography'


categories = category_titles.map do |category_title|
  Category.create!({title: category_title})
end

location_titles = [
    'New York City, NY',
    'Los Angeles, CA',
  ]
  # 'Chicago, IL',
  # 'Houston, TX',
  # 'Philadelphia, CA',
  # 'Phoenix, AZ',
  # 'San Antonio, TX',
  # 'San Diego, CA',
  # 'Dallas, TX',
  # 'San Jose, CA',
  # 'San Francisco, CA',
  # 'Austin, TX',
  # 'Sacramento, CA',
  # 'Oakland, CA'

locations = location_titles.map do |location_title|
  Location.create({title: location_title})
end

names = [
  'Lashawn Pascale',
  'Margherita Rolfe',
  'Jerlene Bloomer',
  'Felipe Herrin',
  'Domitila Pigg',
  'Lucretia Stoute',
  'Sandie Valle',
  'Cheryle Winnett',
  'Leonardo Meneely',
  'Daniela Rash',
  'Jesica Rothrock',
  'Veta Parvin',
  'Kyong Hungate',
  'Stacee Schick',
  'Evelina Beres',
  'Natalie Oelke',
  'Zoe Casillas',
  'Felicita Jalbert',
  'Marketta Suber',
  'Carlena Lewey',
  'Kaylee Sholes',
  'Celina Bleau',
  'Tina Braddy',
  'Londa Hemminger',
  'Magdalena Gertz',
  'Titus Spurling',
  'Madeleine Hau',
  'Kermit Degree',
  'Chad Weight',
  'Elissa Hoss',
  'Joanna Yockey',
  'Byron Dumas',
  'Shasta Metivier',
  'Rozella Ludlow',
  'Ardis Braaten',
  'Tomeka Stephen',
  'Myrna Schwartzberg',
  'Malcolm Steedley',
  'Shelley Dople',
  'Sammy Bate',
  'Latashia Hunziker',
  'Floria Paramore',
  'Elfreda Elderkin',
  'Shaunda Valenzuela',
  'Thea Kriegel',
  'Paulina Bowyer',
  'Ali Haymaker',
  'Leena Mazzarella',
  'Emelina Brendle',
  'Melisa Scruton',
  'Mackenzie Hegna',
  'Aleta Capobianco',
  'Dimple Vanderzee',
  'Tami Raffa',
  'Palmira Eriksen',
  'Ryann Halligan',
  'Yon Neilson',
  'Orpha Heitzman',
  'Sherly Zuk',
  'Shawna Touchstone',
  'Louanne Kohn',
  'Joya Fanelli',
  'Lucilla Labbe',
  'Suzann Tidd',
  'Sau Azure',
  'Leida Dow',
  'Crystle Riggan',
  'Bernardine Dworkin',
  'Paulita Mancuso',
  'Mignon Faver',
  'Romona Piehl',
  'Yoshiko Hans',
  'Renate Tardiff',
  'Nereida Caruso',
  'Florencio Schuld',
  'Crista Hise',
  'Ahmad Gans',
  'Shavon Uhlig',
  'Krystal Minto',
  'Shirley Jager',
  'Julian Hussey',
  'January Capra',
  'Carlie Chism',
  'Xenia Mazzola',
  'Nicola Leno',
  'Byron Hewlett',
  'Wallace Neiman',
  'Maybelle Hail',
  'Fatima Zeng',
  'Un Lederman',
  'Jonah Cheever',
  'Lorinda Oum',
  'Alaina Seekins',
  'Lucas Hunsinger',
  'Ouida Tobler',
  'Saran Savedra',
  'Roxane Sandor',
  'Pura Ayres',
  'Deja Vanduyne',
  'Tonja Lott',
  'Kandy Stansfield',
  'Porter Mayes',
  'Deana Brodeur',
  'Novella Cudjoe',
  'Veola Tait',
  'Nichelle Templeton',
  'Johnetta Savoy',
  'Marilee Patz',
  'Lovie Weidler',
  'Neta Chiu',
  'Elena Lybrand',
  'Marylou Cervantez',
  'Allena Gaymon',
  'Allyson Tressler',
  'Refugia Stanger',
  'Blaine Holst',
  'Antonette Lenzi',
  'Gilberto Pasch',
  'Emory Tourville',
  'Ramiro Edinger',
  'Sparkle Orsi',
  'Abigail Mahn',
  'Gaynell Jorgensen',
  'Jewell Jin',
  'Hana Falco',
  'Jacquelin Coon'
]
  # 'Adelle Hertzler',
  # 'Irwin Giffin',
  # 'Shantel Weishaar',
  # 'Meggan Gilbreath',
  # 'Caterina Ohlson',
  # 'Elvina Cusimano',
  # 'Wayne Kinslow',
  # 'Trudie Piasecki',
  # 'Damion Rhoda',
  # 'Virgina Simmonds',
  # 'Domenic Priddy',
  # 'Olive Hiers',
  # 'Raphael Ulloa',
  # 'Aurelio Woolwine',
  # 'Tara Castilla',
  # 'Adolph Keniston',
  # 'Edythe Gainer',
  # 'Le Yarnall',
  # 'Janita Toler',
  # 'Joesph Morrisette',
  # 'Felix Benningfield',
  # 'Cory Lupton',
  # 'Patrick Bunkley',
  # 'Faviola Infantino',
  # 'Hortensia Tune',
  # 'Kala Filippini',
  # 'Jacqui Santillan',
  # 'Adolph Luckey',
  # 'Devora Eagle',
  # 'Graig Mcaleer',
  # 'America Watters',
  # 'Flo Raab',
  # 'Jamel Jaworski',
  # 'Georgann Salter',
  # 'Jerrie Mcintyre',
  # 'Gracie Marenco',
  # 'Minta Simmerman',
  # 'Jessenia Kinnison',
  # 'Ricarda Walling',
  # 'Bo Morman',
  # 'Sherrie Lape',
  # 'Carma Starling',
  # 'Lorilee Buitron',
  # 'Myrl Metzger',
  # 'Ronni Leake',
  # 'Marcela Higham',
  # 'Macy Merced',
  # 'Bruna Cava',
  # 'Danelle Mehr',
  # 'Matilde Schunk',
  # 'Errol Mather',
  # 'Minerva Kaminski',
  # 'Juana Welle',
  # 'Wendell Miland',
  # 'Evonne Winbush',
  # 'Brad Kettner',
  # 'Del Covington',
  # 'Loma Traxler',
  # 'Wallace Viviani',
  # 'Sherron Bellanger',
  # 'Denna Kunst',
  # 'Danyell Baugher',
  # 'Keisha Mcmackin',
  # 'Lee Shirah',
  # 'Consuela Keown',
  # 'Simone Hollar',
  # 'Katelyn Lucious',
  # 'Jerome Winkles',
  # 'Leslee Mccomb',
  # 'Micheal Beech',
  # 'Matha Beer',
  # 'Laurel Sivils',
  # 'Sherill Walk',
  # 'Tina Harger',
  # 'Hilary Giraldo',
  # 'Rosalba Wemple',
  # 'Eduardo Quevedo',
  # 'Izetta Calvo',
  # 'Jamel Favorite',
  # 'Filomena Tustin',
  # 'Geneva Chewning',
  # 'Ara Duprey',
  # 'Slyvia Newbern',
  # 'Catrice Real',
  # 'Oren Ballenger',
  # 'Kassandra Aubert',
  # 'Jefferson Pare',
  # 'Dahlia Philpott',
  # 'Alvin Helbig',
  # 'Alvera Oatman',
  # 'Nolan Volkman',
  # 'Keshia Buckley',
  # 'Everett Farless',
  # 'Deangelo Cassin',
  # 'Rosette Gordan',
  # 'Eve Hick',
  # 'Leonore Bardwell',
  # 'Shante Delacruz',
  # 'Elizabeth Decato',
  # 'Terri Glancy',
  # 'Richie Mcauley',
  # 'Franklyn Hammitt',
  # 'Ema Mcguffin',
  # 'Sherika Madewell',
  # 'Sammie Sugar',
  # 'Trudi Lagunas',
  # 'Elijah Calhoon',
  # 'Jacqualine Israel',
  # 'Armanda Yao',
  # 'Paulita Carol',
  # 'Oscar Plotkin',
  # 'Yu Kubik',
  # 'Livia Hinz',
  # 'Derick Helmers',
  # 'Shawnda Ormond',
  # 'Jinny Samuel',
  # 'Shakita Santore',
  # 'Rubin Greenblatt',
  # 'Jonah Strawbridge',
  # 'Leeanne Vanderbilt',
  # 'Alaine Tadlock',
  # 'Renato Wieck',
  # 'Lakeshia Twilley',
  # 'Ela Alfaro',
  # 'Daron Steadman',
  # 'Rosaria Cafferty',
  # 'Theresia Roney',
  # 'Meghann Biller',
  # 'Florencio Ornellas',
  # 'Jovan Denmon',
  # 'Caterina Paton',
  # 'Cheryl Boyington',
  # 'Belle Klassen',
  # 'Kiersten Lydon',
  # 'Viva Janney',
  # 'Ethyl Greig',
  # 'Giovanni Etherton',
  # 'Nakisha Kafka',
  # 'Sulema Parkes',
  # 'Naoma Schuld',
  # 'Tonia Givens',
  # 'Rebeca Panzer',
  # 'Charmaine Bosserman',
  # 'Dorcas Charlie',
  # 'Valeri Oberle',
  # 'Manual Lones',
  # 'Brittaney Jimenez',
  # 'Myron Ryals',
  # 'Sherril Mingus',
  # 'Bettyann Vanderford',
  # 'Dung Cray',
  # 'Lannie Gurney',
  # 'Aleisha Sylvain',
  # 'Ashlyn Glorioso',
  # 'Latrina Gochenour',
  # 'Andreas Saldivar',
  # 'Carmelita Tyus',
  # 'Magaly Vandervort',
  # 'Sophia Benson',
  # 'Trey Garlock',
  # 'Mertie Huber',
  # 'Fernande Stottlemyer',
  # 'Isaiah Gracia',
  # 'Ayako Thomason',
  # 'Tomi Orzechowski',
  # 'Chana Swanson',
  # 'Patria Damore',
  # 'Thuy Wallen',
  # 'Santiago Gatchell',
  # 'Awilda Baca',
  # 'Allie Harvison',
  # 'Von Rado',
  # 'Carlton Mendonca',
  # 'Charity Arneson',
  # 'Donald Dimas',
  # 'Coletta Coward',
  # 'Galen Lytch',
  # 'Brendan Wolter',
  # 'Devona Adkisson',
  # 'Erika Ruley',
  # 'Aurore Bodiford',
  # 'Inocencia Mcginley',
  # 'Ali Job',
  # 'Kortney Philson',
  # 'Jaclyn Channel',
  # 'Vashti Hur',
  # 'Lavona Current',
  # 'Signe Marksberry',
  # 'Meta Heisey',
  # 'Conrad Gorsuch',
  # 'Asuncion Zabriskie',
  # 'Tilda Ruffino',
  # 'Marshall Armand',
  # 'Leeann Benson',
  # 'Yasmine Hofer',
  # 'Lorilee Leasure',
  # 'Anja Schriver',
  # 'Lurlene Rasco',
  # 'Argelia Pires',
  # 'Titus Criado',
  # 'Fe Number',
  # 'Mitzie Sera',
  # 'Tera Sowa',
  # 'Olin Royce',
  # 'Dawn Albaugh',
  # 'Natividad Deer',
  # 'Alisa Lehrman',
  # 'Sharleen Hout',
  # 'Magen Blank',
  # 'Sonny Darrell',
  # 'Pok Cedano',
  # 'Chelsea Kreiger',
  # 'Leeanne Koran',
  # 'Consuelo Fu',
  # 'Annalisa Comeaux',
  # 'Shonna Lipham',
  # 'Aisha Savidge',
  # 'Jeanette Pick',
  # 'Debby Fobbs',
  # 'Lyndsey Brumett',
  # 'Santa Furrow',
  # 'Marlyn Kivi',
  # 'Cornell Helsley',
  # 'Archie Summerlin'

names.each do |name|
  rateGenerator = Random.new
  rate = rateGenerator.rand(15.0...200.0).round(2).to_s
  Tasker.create!({name: names.sample, location_id: locations.sample.id, description:'Hello, I am amazing. Hire me!', rate: rate})
end

day_titles = [Date.today]

13.times do
  day_titles << day_titles.last + 1
end

days = day_titles.map do |day_title|
  Day.create!({title: day_title})
end

hour_titles = ['8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm']

hours = hour_titles.map do |hour_title|
  Hour.create!({title: hour_title})
end

time_slots = []

days.each do |day|
  hours.each do |hour|
    time_slots << TimeSlot.create!({day_id: day.id, hour_id: hour.id})
  end
end

Tasker.all.each do |tasker|
  tasker_time_slots = []

  until tasker_time_slots.length == 10
    time_slot = time_slots.sample
    tasker_time_slots << time_slot unless tasker_time_slots.include?(time_slot)
  end

  tasker_time_slots.each do |slot|
    TimeSlotRegistration.create!({tasker_id: tasker.id, time_slot_id: slot.id})
  end

  category = categories.sample
  vehicle = vehicles.sample
  size = sizes.sample

  CategoryRegistration.create!({tasker_id: tasker.id, category_id: category.id})
  VehicleRegistration.create!({tasker_id: tasker.id, vehicle_id: vehicle.id})
  SizeRegistration.create!({tasker_id: tasker.id, size_id: size.id})
end
