// // // const express = require('express');
// // // const fs = require('fs').promises;
// // // const path = require('path');
// // // const cors = require('cors');

// // // const app = express();
// // // const port = 3000;
// // // const dataFilePath = path.join(__dirname, 'data.json');

// // // // Middleware
// // // app.use(cors());
// // // app.use(express.json());

// // // // Endpoint to get current data
// // // app.get('/api/data', async (req, res) => {
// // //     try {
// // //         const data = await fs.readFile(dataFilePath, 'utf8');
// // //         res.json(JSON.parse(data));
// // //     } catch (error) {
// // //         console.error('Error reading data file:', error);
// // //         res.status(500).json({ error: 'Internal server error' });
// // //     }
// // // });

// // // // Endpoint to save data
// // // app.post('/api/data', async (req, res) => {
// // //     try {
// // //         const newData = req.body;
// // //         // Validate data structure
// // //         if (!newData.contributors || !newData.articles || !newData.posts || 
// // //             !newData.ratings || !newData.comments) {
// // //             return res.status(400).json({ error: 'Invalid data structure' });
// // //         }
        
// // //         // Write data to file
// // //         await fs.writeFile(dataFilePath, JSON.stringify(newData, null, 2));
// // //         res.json({ message: 'Data saved successfully' });
// // //     } catch (error) {
// // //         console.error('Error saving data:', error);
// // //         res.status(500).json({ error: 'Internal server error' });
// // //     }
// // // });

// // // // Start server
// // // app.listen(port, () => {
// // //     console.log(`Server running at http://localhost:${port}`);
// // // });


// // const express = require('express');
// //   const fs = require('fs').promises;
// //   const path = require('path');
// //   const cors = require('cors');

// //   const app = express();
// //   const port = 3000;
// //   const dataFilePath = path.join(__dirname, 'public', 'data.json'); // Adjust path to data.json

// //   // Middleware
// //   app.use(cors());
// //   app.use(express.json());
// //   app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public

// //   // Endpoint to get current data
// //   app.get('/api/data', async (req, res) => {
// //       try {
// //           const data = await fs.readFile(dataFilePath, 'utf8');
// //           res.json(JSON.parse(data));
// //       } catch (error) {
// //           console.error('Error reading data file:', error);
// //           res.status(500).json({ error: 'Internal server error' });
// //       }
// //   });

// //   // Endpoint to save data
// //   app.post('/api/data', async (req, res) => {
// //       try {
// //           const newData = req.body;
// //           // Validate data structure
// //           if (!newData.contributors || !newData.articles || !newData.posts || 
// //               !newData.ratings || !newData.comments) {
// //               return res.status(400).json({ error: 'Invalid data structure' });
// //           }
          
// //           // Write data to file
// //           await fs.writeFile(dataFilePath, JSON.stringify(newData, null, 2));
// //           res.json({ message: 'Data saved successfully' });
// //       } catch (error) {
// //           console.error('Error saving data:', error);
// //           res.status(500).json({ error: 'Internal server error' });
// //       }
// //   });

// //   // Start server
// //   app.listen(port, () => {
// //       console.log(`Server running at http://localhost:${port}`);
// //   });





// const express = require('express');
//    const fs = require('fs').promises;
//    const path = require('path');
//    const cors = require('cors');

//    const app = express();
//    const port = 3000;
//    const dataFilePath = path.join(__dirname, 'public', 'data.json');

//    // Middleware
//    app.use(cors());
//    app.use(express.json());
//    app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public

//    // Default route for root
//    app.get('/', (req, res) => {
//        res.sendFile(path.join(__dirname, 'public', 'index.html'));
//    });

//    // Custom route for /blog-view
//    app.get('/blog-view', (req, res) => {
//        res.sendFile(path.join(__dirname, 'public', 'blog-view.html'));
//    });

//    // Endpoint to get current data
//    app.get('/api/data', async (req, res) => {
//        try {
//            const data = await fs.readFile(dataFilePath, 'utf8');
//            res.json(JSON.parse(data));
//        } catch (error) {
//            console.error('Error reading data file:', error);
//            res.status(500).json({ error: 'Internal server error' });
//        }
//    });

//    // Endpoint to save data
//    app.post('/api/data', async (req, res) => {
//        try {
//            const newData = req.body;
//            // Validate data structure
//            if (!newData.contributors || !newData.articles || !newData.posts || 
//                !newData.ratings || !newData.comments) {
//                return res.status(400).json({ error: 'Invalid data structure' });
//            }
           
//            // Write data to file
//            await fs.writeFile(dataFilePath, JSON.stringify(newData, null, 2));
//            res.json({ message: 'Data saved successfully' });
//        } catch (error) {
//            console.error('Error saving data:', error);
//            res.status(500).json({ error: 'Internal server error' });
//        }
//    });

//    // Start server
//    app.listen(port, () => {
//        console.log(`Server running at http://localhost:${port}`);
//    });






const express = require('express');
   const fs = require('fs').promises;
   const path = require('path');
   const cors = require('cors');

   const app = express();
   const port = 3000;
   const dataFilePath = path.join(__dirname, 'public', 'data.json');

   // Middleware
   app.use(cors());
   app.use(express.json());
   app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public

   // Default route for root
   app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname, 'public', 'index.html'));
   });

   // Custom route for /blog-view
   app.get('/blog-view', (req, res) => {
       res.sendFile(path.join(__dirname, 'public', 'blog-view.html'));
   });

   // Custom route for /articles
   app.get('/articles', (req, res) => {
       res.sendFile(path.join(__dirname, 'public', 'articles.html'));
   });

   // Endpoint to get current data
   app.get('/api/data', async (req, res) => {
       try {
           const data = await fs.readFile(dataFilePath, 'utf8');
           res.json(JSON.parse(data));
       } catch (error) {
           console.error('Error reading data file:', error);
           res.status(500).json({ error: 'Internal server error' });
       }
   });

   // Endpoint to save data
   app.post('/api/data', async (req, res) => {
       try {
           const newData = req.body;
           // Validate data structure
           if (!newData.contributors || !newData.articles || !newData.posts || 
               !newData.ratings || !newData.comments) {
               return res.status(400).json({ error: 'Invalid data structure' });
           }
           
           // Write data to file
           await fs.writeFile(dataFilePath, JSON.stringify(newData, null, 2));
           res.json({ message: 'Data saved successfully' });
       } catch (error) {
           console.error('Error saving data:', error);
           res.status(500).json({ error: 'Internal server error' });
       }
   });

   // Start server
   app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
   });