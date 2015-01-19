/*
*   The MIT License (MIT)

 Copyright (c) 2015 Kameron Brooks

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE
*
 */

/**==================================================
 *                  Generic Vector Class
 *      This is a generic vector class,
 *      It can be any length, dont use it, it does not make use of the Float32Array class, and is most likely much slower than the Vec2 Vec3 and Vec4 classes
 ====================================================*/
 
function Vector() {
    this.length = 0;
};
Vector.prototype.getMagnitude = function() {
    var i=0;
    var mag = 0;
    for(i=0;i<this.length;i+=1) {
        mag += this[i] * this[i];
    }
    return Math.sqrt(mag);
};
Vector.prototype.normailze = function() {
    var i=0;
    var mag = this.getMagnitude();
    for(i=0;i<this.length;i+=1) {
        this[i] = this[i] / mag;
    }
};
Vector.prototype.copyTo = function(v2) {
    var i=0;
    for(i=0;i<this.length;i+=1) {
        v2[i] = this[i];
        v2.length = this.length;
    }
};

/**==================================================
 *                  Vec2
 ====================================================*/

var Vec2 = {};

Vec2.create = function(x,y) {
    var out = new Float32Array(2);
    out[0] = (x===undefined) ? 0 : x;
    out[1] = (y===undefined) ? 0 : y;
    return out;
};
Vec2.clone = function(v,out) {
    if(out) {
        out[0] = v[0];
        out[1] = v[1];
    } else {
        return Vec2.create(v[0],v[1]);
    }
};

Vec2.magnitude = function(v) {
    return Math.sqrt(v[0]*v[0] + v[1]*v[1]);
};
Vec2.dist = function(v0,v1) {
    return Math.sqrt((v0[0]-v1[0]) * (v0[0]-v1[0]) + (v0[1]-v1[1]) * (v0[1]-v1[1]));
};
Vec2.sqrDist = function(v0,v1) {
    return (v0[0]-v1[0]) * (v0[0]-v1[0]) + (v0[1]-v1[1]) * (v0[1]-v1[1]);
};
Vec2.normalize = function(v,out) {
    var mag = this.magnitude(v);
    Vec2.divide_f(v,mag,out);
};
Vec2.add_v = function(v0,v1,out) {
    if(out) {
        out[0] = v0[0] + v1[1];
        out[1] = v0[1] + v1[1];
    } else {
        return Vec2.create(v0[0] + v1[0], v0[1] + v1[1]);
    }
};
Vec2.add_f = function(v0,f,out) {
    if(out) {
        out[0] = v0[0] + f;
        out[1] = v0[1] + f;
    } else {
        return Vec2.create(v0[0] + f, v0[1] + f);
    }
};

Vec2.add = function(v0,v1,out) {
    if(v1.length) {
        return this.add_v(v0,v1,out);
    } else {
        return this.add_f(v0,v1,out);
    }
};
Vec2.subtract_v = function(v0,v1,out) {
    if(out) {
        out[0] = v0[0] - v1[1];
        out[1] = v0[1] - v1[1];
    } else {
        return Vec2.create(v0[0] - v1[0], v0[1] - v1[1]);
    }
};
Vec2.subtract_f = function(v0,f,out) {
    if(out) {
        out[0] = v0[0] - f;
        out[1] = v0[1] - f;
    } else {
        return Vec2.create(v0[0] - f, v0[1] - f);
    }
};
Vec2.subtract = function(v0,v1,out) {
    if(v1.length) {
        return this.subtract_v(v0,v1,out);
    } else {
        return this.subtract_f(v0,v1,out);
    }
};
Vec2.multiply_v = function(v0,v1,out) {
    if(out) {
        out[0] = v0[0] * v1[1];
        out[1] = v0[1] * v1[1];
    } else {
        return Vec2.create(v0[0] * v1[0], v0[1] * v1[1]);
    }
};
Vec2.multiply_f = function(v0,f,out) {
    if(out) {
        out[0] = v0[0] * f;
        out[1] = v0[1] * f;
    } else {
        return Vec2.create(v0[0] * f, v0[1] * f);
    }
};
Vec2.multiply = function(v0,v1,out) {
    if(v1.length) {
        return this.multiply_v(v0,v1,out);
    } else {
        return this.multiply_f(v0,v1,out);
    }
};

Vec2.divide_v = function(v0,v1,out) {
    if(out) {
        out[0] = v0[0] / v1[1];
        out[1] = v0[1] / v1[1];
    } else {
        return Vec2.create(v0[0] / v1[0], v0[1] / v1[1]);
    }
};
Vec2.divide_f = function(v0,f,out) {
    if(out) {
        out[0] = v0[0] / f;
        out[1] = v0[1] / f;
    } else {
        return new Vec2(v0[0] / f, v0[1] / f);
    }
};
Vec2.divide = function(v0,v1,out) {
    if(v1.length) {
        return this.divide_v(v0,v1,out);
    } else {
        return this.divide_f(v0,v1,out);
    }
};
Vec2.dot = function(v0,v1) {
    return v0[0] * v1[0] + v0[1] * v1[1];
};
Vec2.project = function(v0,v1,out) {
    var d = v0[0] * v1[0] + v0[1] * v1[1];
    var sqrMag = v1[0] * v1[0] + v1[1] * v1[1];
    var comp = d/sqrMag;
    if(out) {
        out[0] = comp * v1[0];
        out[1] = comp * v1[1];
    } else {
        Vec2.create(comp * v1[0],comp * v1[1]);
    }
};

/**==================================================
 *                  Vec3
 ====================================================*/

var Vec3 = {};

Vec3.clone = function(v,out) {
    if(out) {
        out[0] = v[0];
        out[1] = v[1];
        out[2] = v[2];
    } else {
        return Vec3.create(v[0],v[1],v[2]);
    }
};

Vec3.magnitude = function(v) {
    return Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
};
Vec3.dist = function(v0,v1) {
    return Math.sqrt((v0[0]-v1[0]) * (v0[0]-v1[0]) + (v0[1]-v1[1]) * (v0[1]-v1[1]) + (v0[2]-v1[2]) * (v0[2]-v1[2]));
};
Vec3.sqrDist = function(v0,v1) {
    return (v0[0]-v1[0]) * (v0[0]-v1[0]) + (v0[1]-v1[1]) * (v0[1]-v1[1]) + (v0[2]-v1[2]) * (v0[2]-v1[2]);
};

Vec3.create = function(x,y,z) {
    var out = new Float32Array(3);
    out[0] = (x===undefined) ? 0 : x;
    out[1] = (y===undefined) ? 0 : y;
    out[2] = (z===undefined) ? 0 : z;
    return out;
};

Vec3.add_v = function(v0,v1,out) {
    if(out) {
        out[0] = v0[0] + v1[1];
        out[1] = v0[1] + v1[1];
        out[2] = v0[2] + v1[2];
    } else {
        return Vec3.create(v0[0] + v1[0], v0[1] + v1[1], v0[2] + v1[2]);
    }
};
Vec3.add_f = function(v0,f,out) {
    if(out) {
        out[0] = v0[0] + f;
        out[1] = v0[1] + f;
        out[2] = v0[2] + f;
    } else {
        return Vec3.create(v0[0] + f, v0[1] + f, v0[2] + f);
    }
};

Vec3.add = function(v0,v1,out) {
    if(v1.length) {
        return this.add_v(v0,v1,out);
    } else {
        return this.add_f(v0,v1,out);
    }
};
Vec3.subtract_v = function(v0,v1,out) {
    if(out) {
        out[0] = v0[0] - v1[1];
        out[1] = v0[1] - v1[1];
        out[2] = v0[2] - v1[2];
    } else {
        return Vec3.create(v0[0] - v1[0], v0[1] - v1[1], v0[2] - v1[2]);
    }
};
Vec3.subtract_f = function(v0,f,out) {
    if(out) {
        out[0] = v0[0] - f;
        out[1] = v0[1] - f;
        out[2] = v0[2] - f;
    } else {
        return Vec3.create(v0[0] - f, v0[1] - f, v0[2] - f);
    }
};
Vec3.subtract = function(v0,v1,out) {
    if(v1.length) {
        return this.subtract_v(v0,v1,out);
    } else {
        return this.subtract_f(v0,v1,out);
    }
};
Vec3.multiply_v = function(v0,v1,out) {
    if(out) {
        out[0] = v0[0] * v1[1];
        out[1] = v0[1] * v1[1];
        out[2] = v0[2] * v1[2];
    } else {
        return Vec3.create(v0[0] * v1[0], v0[1] * v1[1], v0[2] * v1[2]);
    }
};
Vec3.multiply_f = function(v0,f,out) {
    if(out) {
        out[0] = v0[0] * f;
        out[1] = v0[1] * f;
        out[2] = v0[2] * f;
    } else {
        return Vec3.create(v0[0] * f, v0[1] * f, v0[2] * f);
    }
};
Vec3.multiply = function(v0,v1,out) {
    if(v1.length) {
        return this.multiply_v(v0,v1,out);
    } else {
        return this.multiply_f(v0,v1,out);
    }
};

Vec3.divide_v = function(v0,v1,out) {
    if(out) {
        out[0] = v0[0] / v1[1];
        out[1] = v0[1] / v1[1];
        out[2] = v0[2] / v1[2];
    } else {
        return Vec3.create(v0[0] / v1[0], v0[1] / v1[1], v0[2] / v1[2]);
    }
};
Vec3.divide_f = function(v0,f,out) {
    if(out) {
        out[0] = v0[0] / f;
        out[1] = v0[1] / f;
        out[2] = v0[2] / f;
    } else {
        return Vec3.create(v0[0] / f, v0[1] / f, v0[2] / f);
    }
};
Vec3.divide = function(v0,v1,out) {
    if(v1.length) {
        return this.divide_v(v0,v1,out);
    } else {
        return this.divide_f(v0,v1,out);
    }
};
Vec3.dot = function(v0,v1) {
    return v0[0] * v1[0] + v0[1] * v1[1] + v0[2] * v1[2];
};
Vec3.project = function(v0,v1,out) {
    var d = v0[0] * v1[0] + v0[1] * v1[1] + v0[2] * v1[2];
    var sqrMag = v1[0] * v1[0] + v1[1] * v1[1] + v1[2] * v1[2];
    var comp = d/sqrMag;
    if(out) {
        out[0] = comp * v1[0];
        out[1] = comp * v1[1];
        out[2] = comp * v1[2];
    } else {
        return Vec3.create(comp * v1[0],comp * v1[1],comp * v1[2]);
    }
};

/**==================================================
 *                  Vec4
 ====================================================*/

var Vec4 = {};

Vec4.clone = function(v,out) {
    if(out) {
        out[0] = v[0];
        out[1] = v[1];
        out[2] = v[2];
        out[3] = v[3];
    } else {
        return Vec4.create(v[0],v[1],v[2],v[3]);
    }
};

Vec4.magnitude = function(v) {
    return Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2] + v[3]*v[3]);
};
Vec4.dist = function(v0,v1) {
    return Math.sqrt((v0[0]-v1[0]) * (v0[0]-v1[0]) + (v0[1]-v1[1]) * (v0[1]-v1[1]) + (v0[2]-v1[2]) * (v0[2]-v1[2]) + (v0[3]-v1[3]) * (v0[3]-v1[3]));
};
Vec4.sqrDist = function(v0,v1) {
    return (v0[0]-v1[0]) * (v0[0]-v1[0]) + (v0[1]-v1[1]) * (v0[1]-v1[1]) + (v0[2]-v1[2]) * (v0[2]-v1[2]) + (v0[3]-v1[3]) * (v0[3]-v1[3]);
};

Vec4.create = function(x,y,z,w) {
    var out = new Float32Array(4);
    out[0] = (x===undefined) ? 0 : x;
    out[1] = (y===undefined) ? 0 : y;
    out[2] = (z===undefined) ? 0 : z;
    out[3] = (w===undefined) ? 0 : w;
    return out;
};

Vec4.add_v = function(v0,v1,out) {
    if(out) {
        out[0] = v0[0] + v1[1];
        out[1] = v0[1] + v1[1];
        out[2] = v0[2] + v1[2];
        out[3] = v0[3] + v1[3];
    } else {
        return Vec4.create(v0[0] + v1[0], v0[1] + v1[1], v0[2] + v1[2], v0[3] + v1[3]);
    }
};
Vec4.add_f = function(v0,f,out) {
    if(out) {
        out[0] = v0[0] + f;
        out[1] = v0[1] + f;
        out[2] = v0[2] + f;
        out[3] = v0[3] + f;
    } else {
        return Vec4.create(v0[0] + f, v0[1] + f, v0[2] + f, v0[3] + f);
    }
};

Vec4.add = function(v0,v1,out) {
    if(v1.length) {
        return this.add_v(v0,v1,out);
    } else {
        return this.add_f(v0,v1,out);
    }
};
Vec4.subtract_v = function(v0,v1,out) {
    if(out) {
        out[0] = v0[0] - v1[1];
        out[1] = v0[1] - v1[1];
        out[2] = v0[2] - v1[2];
        out[3] = v0[3] - v1[3];
    } else {
        return Vec4.create(v0[0] - v1[0], v0[1] - v1[1], v0[2] - v1[2], v0[3] - v1[3]);
    }
};
Vec4.subtract_f = function(v0,f,out) {
    if(out) {
        out[0] = v0[0] - f;
        out[1] = v0[1] - f;
        out[2] = v0[2] - f;
        out[3] = v0[3] - f;
    } else {
        return Vec4.create(v0[0] - f, v0[1] - f, v0[2] - f, v0[3] - f);
    }
};
Vec4.subtract = function(v0,v1,out) {
    if(v1.length) {
        return this.subtract_v(v0,v1,out);
    } else {
        return this.subtract_f(v0,v1,out);
    }
};
Vec4.multiply_v = function(v0,v1,out) {
    if(out) {
        out[0] = v0[0] * v1[1];
        out[1] = v0[1] * v1[1];
        out[2] = v0[2] * v1[2];
        out[3] = v0[3] * v1[3];
    } else {
        return Vec4.create(v0[0] * v1[0], v0[1] * v1[1], v0[2] * v1[2], v0[3] * v1[3]);
    }
};
Vec4.multiply_f = function(v0,f,out) {
    if(out) {
        out[0] = v0[0] * f;
        out[1] = v0[1] * f;
        out[2] = v0[2] * f;
        out[3] = v0[3] * f;
    } else {
        return Vec4.create(v0[0] * f, v0[1] * f, v0[2] * f, v0[3] * f);
    }
}
Vec4.multiply = function(v0,v1,out) {
    if(v1.length) {
        return this.multiply_v(v0,v1,out);
    } else {
        return this.multiply_f(v0,v1,out);
    }
};

Vec4.divide_v = function(v0,v1,out) {
    if(out) {
        out[0] = v0[0] / v1[1];
        out[1] = v0[1] / v1[1];
        out[2] = v0[2] / v1[2];
        out[3] = v0[3] / v1[3];
    } else {
        return Vec4.create(v0[0] / v1[0], v0[1] / v1[1], v0[2] / v1[2], v0[3] / v1[3]);
    }
};
Vec4.divide_f = function(v0,f,out) {
    if(out) {
        out[0] = v0[0] / f;
        out[1] = v0[1] / f;
        out[2] = v0[2] / f;
        out[3] = v0[3] / f;
    } else {
        return Vec4.create(v0[0] / f, v0[1] / f, v0[2] / f, v0[3] / f);
    }
};
Vec4.divide = function(v0,v1,out) {
    if(v1.length) {
        return this.divide_v(v0,v1,out);
    } else {
        return this.divide_f(v0,v1,out);
    }
};
Vec4.dot = function(v0,v1) {
    return v0[0] * v1[0] + v0[1] * v1[1] + v0[2] * v1[2] + v0[3] * v1[3];
};
Vec4.project = function(v0,v1,out) {
    var d = v0[0] * v1[0] + v0[1] * v1[1] + v0[2] * v1[2] + v0[3] * v1[3];
    var sqrMag = v1[0] * v1[0] + v1[1] * v1[1] + v1[2] * v1[2] + v1[3] * v1[3];
    var comp = d/sqrMag;
    if(out) {
        out[0] = comp * v1[0];
        out[1] = comp * v1[1];
        out[2] = comp * v1[2];
        out[3] = comp * v1[3];
    } else {
        return Vec4.create(comp * v1[0],comp * v1[1],comp * v1[2],comp * v1[3]);
    }
};

/**==================================================
 *                  Matrix2D
 ====================================================*/

var Matrix2D = {};
Matrix2D.create = function (columns,rows,data) {
    var size = columns*rows;
    var output = new Float32Array(size);
    var i;
    var dl;
    if(data && data.length > 0) {
        dl = data.length;
        for(i<0;i<size;i+=1) {
            output[0] = (data[0]===undefined) ? 0 : data[0];
        }
    } else {
        
    }
    
    output.rows = rows;
    output.columns = columns;
    
    return output;
};
Matrix2D.multiply_m = function (m0,m1,out) {
    if(m0.columns !== m1.rows) return;
    var matrix;
    var i;
    var j;
    var x;
    var y;
    var mod_i = 0;
    var cElem = 0;
    var cols = m1.columns;
    var elements = m1.columns*m1.rows;


    if(out) {
        for(i=0;i<elements;i+=1) {
            cElem = 0;
            mod_i = i % cols;
            for(j=0;j<cols;j+=1) {
                cElem += m0[mod_i + j*cols] * m1[j + (i-mod_i)];
            }
            out[i] = cElem;
        }
        return out;
    } else {
        matrix = Matrix2D.create(m1.columns, m1.rows);
        for(i=0;i<elements;i+=1) {
            cElem = 0;
            mod_i = i % cols;

            for(j=0;j<cols;j+=1) {

                cElem += m0[mod_i + j*cols] * m1[j + (i-mod_i)];
            }
            matrix[i] = cElem;
        }
        return matrix;
    }

};
Matrix2D.identity = function(mat, columns, rows) {
    var i=0;
    var c = mat.columns || columns;
    var r = mat.rows || rows;
    for(i=0;i<mat.length;i+=1) {
        mat[i] = (i%(c+1)) ? 0 : 1;
    }
};

/**==================================================
 *                  Mat2
 ====================================================*/


 var Mat2 ={};

Mat2.create = function(a0,a1,b0,b1) {
    var out = new Float32Array(4);
    out[0] = (a0===undefined) ? 1 : a0;
    out[1] = (a1===undefined) ? 0 : a1;
    out[2] = (b0===undefined) ? 0 : b0;
    out[3] = (b1===undefined) ? 1 : b1;
    out.rows = 2;
    out.columns = 2;
    return out;
};

 Mat2.identity = function(m) {
     m[0] = 1;
     m[1] = 0;
     m[2] = 0;
     m[3] = 1;

 };
 
 Mat2.multiply_m = function (m0,m1,out) {
     if(out  && (out !== m0 || out !== m1)) {
         out[0] = m0[0] * m1[0] + m0[3] * m1[1] + m0[6] * m1[2];
         
     } else {
         return Mat2.create(
             m0[0] * m1[0] + m0[2] * m1[1], 
             m0[1] * m1[0] + m0[3] * m1[1], 
             m0[0] * m1[2] + m0[2] * m1[3],
             m0[1] * m1[2] + m0[3] * m1[3]);
     }
 };
 Mat2.multiply_v = function (m0,v,out) {
     if(out  && (out !== m0 || out !== v)) {
         out[0] = m0[0] * v[0] + m0[2] * v[1];
         out[1] = m0[1] * v[0] + m0[3] * v[1];
         
     } else {
         return Vec2.create(
             m0[0] * v[0] + m0[2] * v[1], 
             m0[1] * v[0] + m0[3] * v[1]
             );
     }
 };
 Mat2.multiply_f = function (m0,f,out) {
     if(out  && out !== m0) {
         out[0] = m0[0] * f;
         out[1] = m0[1] * f;
         out[2] = m0[2] * f;
         out[3] = m0[3] * f;
     } else {
         return Mat2.create(
             m0[0] * f, 
             m0[1] * f, 
             m0[2] * f,
             m0[3] * f);
     }
 };
 Mat2.multiply = function (m0,m1,out) {
     if(m1.length) {
         if(m1.length === 4) {
             return this.multiply_m(m0,m1,out);
         } else {
             return this.multiply_v(m0,m1,out);
         }
     } else {
         return this.multiply_f(m0,m1,out);
     }
 };
Mat2.scale = function(m,x,y,out) {
    if(out  && out !== m) {
        out[0] = m[0] * x;
        out[1] = m[1] * x;
        out[2] = m[2] * y;
        out[3] = m[3] * y;

    } else {
        return Mat2.create(m[0] * x, m[1] * x, m[2] * y, m[3] * y)
    }
};
Mat2.rotate = function(m,angle,out) {
    var mcos = Math.cos(angle);
    var msin = Math.sin(angle);
    
    if(out) {
        out[0] = mcos * m[0] + msin * m[1];
        out[1] = -msin * m[0] + mcos * m[1];
        out[2] = mcos * m[2] + msin * m[3];
        out[3] = -msin * m[2] + mcos * m[3];
    } else {
        return Mat2.create(
            mcos * m[0] + msin * m[1],
            -msin * m[0] + mcos * m[1],
            mcos * m[2] + msin * m[3],
            -msin * m[2] + mcos * m[3]     
        );
    }
};

Mat2.transpose = function(m,out) {
    /*---------------------------------
     * TODO: 
     ---------------------------------*/
};
Mat2.inverse = function(m,out) {
    /*---------------------------------
     * TODO: 
     ---------------------------------*/
};
 
 
 
 /**==================================================
 *                  Mat3
 ====================================================*/

var Mat3 = {};

Mat3.create = function(a0,a1,a2,b0,b1,b2,c0,c1,c2) {
    var out = new Float32Array(9);
    out[0] = (a0===undefined) ? 1 : a0;
    out[1] = (a1===undefined) ? 0 : a1;
    out[2] = (a2===undefined) ? 0 : a2;
    out[3] = (b0===undefined) ? 0 : b0;
    out[4] = (b1===undefined) ? 1 : b1;
    out[5] = (b2===undefined) ? 0 : b2;
    out[6] = (c0===undefined) ? 0 : c0;
    out[7] = (c1===undefined) ? 0 : c1;
    out[8] = (c2===undefined) ? 1 : c2;
    out.rows = 3;
    out.columns = 3;
    return out;
};

Mat3.clone = function(m, out) {
    if(out) {
        out[0] = m[0];
        out[1] = m[1];
        out[2] = m[2];
        out[3] = m[3];
        out[4] = m[4];
        out[5] = m[5];
        out[6] = m[6];
        out[7] = m[7];
        out[8] = m[8];
        
    } else {
        return Mat4.create(
            m[0],m[1],m[2],
            m[3],m[4],m[5],
            m[6],m[7],m[8]
        );
    }
};

 Mat3.identity = function(m) {
     m[0] = 1;
     m[1] = 0;
     m[2] = 0;
     m[3] = 0;
     m[4] = 1;
     m[5] = 0;
     m[6] = 0;
     m[7] = 0;
     m[8] = 1;
 };
 
 Mat3.multiply_m = function (m0,m1,out) {
     if(out  && (out !== m0 || out !== m1)) {
         out[0] = m0[0] * m1[0] + m0[3] * m1[1] + m0[6] * m1[2];
         out[1] = m0[1] * m1[0] + m0[4] * m1[1] + m0[7] * m1[2];
         out[2] = m0[2] * m1[0] + m0[5] * m1[1] + m0[8] * m1[2];

         out[3] = m0[0] * m1[3] + m0[3] * m1[4] + m0[6] * m1[5];
         out[4] = m0[1] * m1[3] + m0[4] * m1[4] + m0[7] * m1[5];
         out[5] = m0[2] * m1[3] + m0[5] * m1[4] + m0[8] * m1[5];

         out[6] = m0[0] * m1[6] + m0[3] * m1[7] + m0[6] * m1[8];
         out[7] = m0[1] * m1[6] + m0[4] * m1[7] + m0[7] * m1[8];
         out[8] = m0[2] * m1[6] + m0[5] * m1[7] + m0[8] * m1[8];
     } else {
         return new Mat3(
             m0[0] * m1[0] + m0[3] * m1[1] + m0[6] * m1[2],
             m0[1] * m1[0] + m0[4] * m1[1] + m0[7] * m1[2],
             m0[2] * m1[0] + m0[5] * m1[1] + m0[8] * m1[2],
             m0[0] * m1[3] + m0[3] * m1[4] + m0[6] * m1[5],
             m0[1] * m1[3] + m0[4] * m1[4] + m0[7] * m1[5],
             m0[2] * m1[3] + m0[5] * m1[4] + m0[8] * m1[5],
             m0[0] * m1[6] + m0[3] * m1[7] + m0[6] * m1[8],
             m0[1] * m1[6] + m0[4] * m1[7] + m0[7] * m1[8],
             m0[2] * m1[6] + m0[5] * m1[7] + m0[8] * m1[8]
         );
     }
 };

 Mat3.multiply_v = function (m0,v,out) {
     if(out  && (out !== m0 || out !== v)) {
         out[0] = m0[0] * v[0] + m0[3] * v[1] + m0[6] * v[2];
         out[1] = m0[1] * v[0] + m0[4] * v[1] + m0[7] * v[2];
         out[2] = m0[2] * v[0] + m0[5] * v[1] + m0[8] * v[2];
         
     } else {
         return Vec3.create(
             m0[0] * v[0] + m0[3] * v[1] + m0[6] * v[2],
             m0[1] * v[0] + m0[4] * v[1] + m0[7] * v[2],
             m0[2] * v[0] + m0[5] * v[1] + m0[8] * v[2]
             );
     }
 };
 Mat3.multiply_f = function (m0,f,out) {
     if(out  && out !== m0) {
         out[0] = m0[0] * f;
         out[1] = m0[1] * f;
         out[2] = m0[2] * f;
         out[3] = m0[3] * f;
         out[4] = m0[4] * f;
         out[5] = m0[5] * f;
         out[6] = m0[6] * f;
         out[7] = m0[7] * f;
         out[8] = m0[8] * f;

     } else {
         return Mat3.create(
             m0[0] * f, 
             m0[1] * f, 
             m0[2] * f,
             m0[3] * f,
             m0[4] * f,
             m0[5] * f,
             m0[6] * f,
             m0[7] * f,
             m0[8] * f
         );
     }
 };
 Mat3.multiply = function (m0,m1,out) {
     if(m1.length) {
         if(m1.length === 9) {
             return this.multiply_m(m0,m1,out);
         } else {
             return this.multiply_v(m0,m1,out);
         }
     } else {
         return this.multiply_f(m0,m1,out);
     }
 };
 
 Mat3.scale = function(m,x,y,z,out) {
    if(out  && out !== m) {
        out[0] = x * m[0];
        out[1] = x * m[1];
        out[2] = x * m[2];
        out[3] = y * m[3];
        out[4] = y * m[4];
        out[5] = y * m[5];
        out[6] = z * m[6];
        out[7] = z * m[7];
        out[8] = z * m[8];
    } else {
        return Mat3.create(
            x * m[0],
            x * m[1],
            x * m[2],
            y * m[3],
            y * m[4],
            y * m[5],
            z * m[6],
            z * m[7],
            z * m[8]
        );
    }
};
Mat3.translate2D = function(m,v,out) {
    var x = v[0], y = v[1], c0 = m[6], c1 = m[7], c2 = m[8];
    if(out && out !== m) {
        out[0] = m[0];
        out[1] = m[1];
        out[2] = m[2];
        out[3] = m[3];
        out[4] = m[4];
        out[5] = m[5];
        out[6] = m[0] * x + m[3] * y + c0;
        out[7] = m[1] * x + m[4] * y + c1;
        out[8] = m[2] * x + m[5] * y + c2;
        
    } else {
        m[6] = m[0] * x + m[3] * y + c0;
        m[7] = m[1] * x + m[4] * y + c1;
        m[8] = m[2] * x + m[5] * y + c2;
    }
}
Mat3.rotate2D = function(m,angle,out) {
    var mcos = Math.cos(angle);
    var msin = Math.sin(angle);
    
    var a = mcos * m[0] - msin * m[3],
    b = m[1] * mcos - m[4] * msin,
    c = m[2] * mcos - m[5] * msin,
    d = m[0] * msin + m[3] * mcos,
    e = m[1] * msin + m[4] * mcos,
    f = m[2] * msin + m[5] * mcos;
    

    if(out && out !== m) {
        out[0] = a;
        out[1] = b;
        out[2] = c;

        out[3] = d;
        out[4] = e;
        out[5] = f;

        out[6] = m[6];
        out[7] = m[7];
        out[8] = m[8];

    } else {
        m[0] = a;
        m[1] = b;
        m[2] = c;

        m[3] = d;
        m[4] = e;
        m[5] = f;
    }
};

Mat3.rotateY = function(m,angle,out) {
    /*
    * TODO
     */
};

Mat3.rotateX = function(m,angle,out) {
    /*
     * TODO
     */
};

Mat3.transpose = function(m,out) {
    /*---------------------------------
     * TODO: 
     ---------------------------------*/
};
Mat3.inverse = function(m,out) {
    /*---------------------------------
     * TODO: 
     ---------------------------------*/
};


/**==================================================
 *                  Mat4
 ====================================================*/

var Mat4 = {};

Mat4.create = function(a0,a1,a2,a3,b0,b1,b2,b3,c0,c1,c2,c3,d0,d1,d2,d3) {
    
    var out = new Float32Array(16);
    out[0] = (a0===undefined) ? 1 : a0;
    out[1] = (a1===undefined) ? 0 : a1;
    out[2] = (a2===undefined) ? 0 : a2;
    out[3] = (a3===undefined) ? 0 : a3;
    out[4] = (b0===undefined) ? 0 : b0;
    out[5] = (b1===undefined) ? 1 : b1;
    out[6] = (b2===undefined) ? 0 : b2;
    out[7] = (b3===undefined) ? 0 : b3;
    out[8] = (c0===undefined) ? 0 : c0;
    out[9] = (c1===undefined) ? 0 : c1;
    out[10] = (c2===undefined) ? 1 : c2;
    out[11] = (c3===undefined) ? 0 : c3;
    out[12] = (d0===undefined) ? 0 : d0;
    out[13] = (d1===undefined) ? 0 : d1;
    out[14] = (d2===undefined) ? 0 : d2;
    out[15] = (d3===undefined) ? 1 : d3;

    out.rows = 4;
    out.columns = 4;
    return out;
};
Mat4.clone = function(m, out) {
    if(out) {
        out[0] = m[0];
        out[1] = m[1];
        out[2] = m[2];
        out[3] = m[3];
        out[4] = m[4];
        out[5] = m[5];
        out[6] = m[6];
        out[7] = m[7];
        out[8] = m[8];
        out[9] = m[9];
        out[10] = m[10];
        out[11] = m[11];
        out[12] = m[12];
        out[13] = m[13];
        out[14] = m[14];
        out[15] = m[15];
    } else {
        return Mat4.create(
            m[0],m[1],m[2],m[3],
            m[4],m[5],m[6],m[7],
            m[8],m[9],m[10],m[11],
            m[12],m[13],m[14],m[15]
        );
    }
};

Mat4.identity = function(m) {
    m[0] = 1;
    m[1] = 0;
    m[2] = 0;
    m[3] = 0;
    m[4] = 0;
    m[5] = 1;
    m[6] = 0;
    m[7] = 0;
    m[8] = 0;
    m[9] = 0;
    m[10] = 1;
    m[11] = 0;
    m[12] = 0;
    m[13] = 0;
    m[14] = 0;
    m[15] = 1;

};

Mat4.multiply_m = function (m0,m1,out) {
    if(out  && (out !== m0 || out !== m1)) {
        out[0] = m0[0] * m1[0] + m0[4] * m1[1] +  m0[8] * m1[2] + m0[12] * m1[3];
        out[1] = m0[1] * m1[0] + m0[5] * m1[1] +  m0[9] * m1[2] + m0[13] * m1[3];
        out[2] = m0[2] * m1[0] + m0[6] * m1[1] + m0[10] * m1[2] + m0[14] * m1[3];
        out[3] = m0[3] * m1[0] + m0[7] * m1[1] + m0[11] * m1[2] + m0[15] * m1[3];

        out[4] = m0[0] * m1[4] + m0[4] * m1[5] +  m0[8] * m1[6] + m0[12] * m1[7];
        out[5] = m0[1] * m1[4] + m0[5] * m1[5] +  m0[9] * m1[6] + m0[13] * m1[7];
        out[6] = m0[2] * m1[4] + m0[6] * m1[5] + m0[10] * m1[6] + m0[14] * m1[7];
        out[7] = m0[3] * m1[4] + m0[7] * m1[5] + m0[11] * m1[6] + m0[15] * m1[7];

        out[8] = m0[0] * m1[8] + m0[4] * m1[9] +  m0[8] * m1[10] + m0[12] * m1[11];
        out[9] = m0[1] * m1[8] + m0[5] * m1[9] +  m0[9] * m1[10] + m0[13] * m1[11];
        out[10] = m0[2] * m1[8] + m0[6] * m1[9] + m0[10] * m1[10] + m0[14] * m1[11];
        out[11] = m0[3] * m1[8] + m0[7] * m1[9] + m0[11] * m1[10] + m0[15] * m1[11];

        out[12] = m0[0] * m1[12] + m0[4] * m1[13] +  m0[8] * m1[14] + m0[12] * m1[15];
        out[13] = m0[1] * m1[12] + m0[5] * m1[13] +  m0[9] * m1[14] + m0[13] * m1[15];
        out[14] = m0[2] * m1[12] + m0[6] * m1[13] + m0[10] * m1[14] + m0[14] * m1[15];
        out[15] = m0[3] * m1[12] + m0[7] * m1[13] + m0[11] * m1[14] + m0[15] * m1[15];


    } else {
        return Mat4.create(
            m0[0] * m1[0] + m0[4] * m1[1] +  m0[8] * m1[2] + m0[12] * m1[3],
            m0[1] * m1[0] + m0[5] * m1[1] +  m0[9] * m1[2] + m0[13] * m1[3],
            m0[2] * m1[0] + m0[6] * m1[1] + m0[10] * m1[2] + m0[14] * m1[3],
            m0[3] * m1[0] + m0[7] * m1[1] + m0[11] * m1[2] + m0[15] * m1[3],
            m0[0] * m1[4] + m0[4] * m1[5] +  m0[8] * m1[6] + m0[12] * m1[7],
            m0[1] * m1[4] + m0[5] * m1[5] +  m0[9] * m1[6] + m0[13] * m1[7],
            m0[2] * m1[4] + m0[6] * m1[5] + m0[10] * m1[6] + m0[14] * m1[7],
            m0[3] * m1[4] + m0[7] * m1[5] + m0[11] * m1[6] + m0[15] * m1[7],
            m0[0] * m1[8] + m0[4] * m1[9] +  m0[8] * m1[10] + m0[12] * m1[11],
            m0[1] * m1[8] + m0[5] * m1[9] +  m0[9] * m1[10] + m0[13] * m1[11],
            m0[2] * m1[8] + m0[6] * m1[9] + m0[10] * m1[10] + m0[14] * m1[11],
            m0[3] * m1[8] + m0[7] * m1[9] + m0[11] * m1[10] + m0[15] * m1[11],
            m0[0] * m1[12] + m0[4] * m1[13] +  m0[8] * m1[14] + m0[12] * m1[15],
            m0[1] * m1[12] + m0[5] * m1[13] +  m0[9] * m1[14] + m0[13] * m1[15],
            m0[2] * m1[12] + m0[6] * m1[13] + m0[10] * m1[14] + m0[14] * m1[15],
            m0[3] * m1[12] + m0[7] * m1[13] + m0[11] * m1[14] + m0[15] * m1[15]
        );
    }
};

Mat4.multiply_v = function (m0,v,out) {
    if(out  && out !== m0) {
        out[0] = m0[0] * v[0] + m0[4] * v[1] +  m0[8] * v[2] + m0[12] * v[3];
        out[1] = m0[1] * v[0] + m0[5] * v[1] +  m0[9] * v[2] + m0[13] * v[3];
        out[2] = m0[2] * v[0] + m0[6] * v[1] + m0[10] * v[2] + m0[14] * v[3];
        out[3] = m0[3] * v[0] + m0[7] * v[1] + m0[11] * v[2] + m0[15] * v[3];

    } else {
        return Vec4.create(
            m0[0] * v[0] + m0[4] * v[1] +  m0[8] * v[2] + m0[12] * v[3],
            m0[1] * v[0] + m0[5] * v[1] +  m0[9] * v[2] + m0[13] * v[3],
            m0[2] * v[0] + m0[6] * v[1] + m0[10] * v[2] + m0[14] * v[3],
            m0[3] * v[0] + m0[7] * v[1] + m0[11] * v[2] + m0[15] * v[3]
        );
    }
};
Mat4.multiply_f = function (m0,f,out) {
    if(out  && out !== m0) {
        out[0] = m0[0] * f;
        out[1] = m0[1] * f;
        out[2] = m0[2] * f;
        out[3] = m0[3] * f;
        out[4] = m0[4] * f;
        out[5] = m0[5] * f;
        out[6] = m0[6] * f;
        out[7] = m0[7] * f;
        out[8] = m0[8] * f;
        out[9] = m0[9] * f;
        out[10] = m0[10] * f;
        out[11] = m0[11] * f;
        out[12] = m0[12] * f;
        out[13] = m0[13] * f;
        out[14] = m0[14] * f;
        out[15] = m0[15] * f;

    } else {
        return Mat4.create(
            m0[0] * f,
            m0[1] * f,
            m0[2] * f,
            m0[3] * f,
            m0[4] * f,
            m0[5] * f,
            m0[6] * f,
            m0[7] * f,
            m0[8] * f,
            m0[9] * f,
            m0[10] * f,
            m0[11] * f,
            m0[12] * f,
            m0[13] * f,
            m0[14] * f,
            m0[15] * f
        );
    }
};
Mat4.multiply = function (m0,m1,out) {
    if(m1.length) {
        if(m1.length === 9) {
            return this.multiply_m(m0,m1,out);
        } else {
            return this.multiply_v(m0,m1,out);
        }
    } else {
        return this.multiply_f(m0,m1,out);
    }
};

Mat4.scale = function(m,v,out) {
    var x = v[0], y = v[1], z = v[2], w = (v[3]) ? v[3] : 1;
    if(out  && out !== m) {
        out[0] = x * m[0];
        out[1] = x * m[1];
        out[2] = x * m[2];
        out[3] = x * m[3];
        out[4] = y * m[4];
        out[5] = y * m[5];
        out[6] = y * m[6];
        out[7] = y * m[7];
        out[8] = z * m[8];
        out[9] = z * m[9];
        out[10] = z * m[10];
        out[11] = z * m[11];
        out[12] = w * m[12];
        out[13] = w * m[13];
        out[14] = w * m[14];
        out[15] = w * m[15];
    } else {
        m[0] = x * m[0];
        m[1] = x * m[1];
        m[2] = x * m[2];
        m[3] = x * m[3];
        m[4] = y * m[4];
        m[5] = y * m[5];
        m[6] = y * m[6];
        m[7] = y * m[7];
        m[8] = z * m[8];
        m[9] = z * m[9];
        m[10] = z * m[10];
        m[11] = z * m[11];
        m[12] = w * m[12];
        m[13] = w * m[13];
        m[14] = w * m[14];
        m[15] = w * m[15];
        
    }
};
Mat4.translate = function(m, v, out) {
    var d0 = m[0] * v[0] + m[4] * v[1] + m[8] * v[2] + m[12],
     d1 = m[1] * v[0] + m[5] * v[1] + m[9] * v[2] + m[13],
     d2 = m[2] * v[0] + m[6] * v[1] + m[10] * v[2] + m[14],
     d3 = m[3] * v[0] + m[7] * v[1] + m[11] * v[2] + m[15];
    if(out && out !== m) {
        out[0] = m[0];
        out[1] = m[1];
        out[2] = m[2];
        out[3] = m[3];
        out[4] = m[4];
        out[5] = m[5];
        out[6] = m[6];
        out[7] = m[7];
        out[8] = m[8];
        out[9] = m[9];
        out[10] = m[10];
        out[11] = m[11];
        out[12] = d0;
        out[13] = d1;
        out[14] = d2;
        out[15] = d3;
    } else {
        m[12] = d0;
        m[13] = d1;
        m[14] = d2;
        m[15] = d3;
    }
};
Mat4.rotateZ = function(m,angle,out) {
    var mcos = Math.cos(angle);
    var msin = Math.sin(angle);

    if(out && out !== m) {
        

    } else {
        return Mat4.create(
            
        );
    }
};

Mat4.rotateY = function(m,angle,out) {
    /*
     * TODO
     */
};

Mat4.rotateX = function(m,angle,out) {
    /*
     * TODO
     */
};

Mat4.transpose = function(m,out) {
    /*---------------------------------
     * TODO:
     ---------------------------------*/
};
Mat4.inverse = function(m,out) {
    /*---------------------------------
     * TODO:
     ---------------------------------*/
};
Mat4.ortho = function (out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    if(out) {
        out[0] = -2 * lr;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = -2 * bt;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 2 * nf;
        out[11] = 0;
        out[12] = (left + right) * lr;
        out[13] = (top + bottom) * bt;
        out[14] = (far + near) * nf;
        out[15] = 1;
    } else {
        return Mat4.create(
            -2 * lr,
            0,
            0,
            0,
            0,
            -2 * bt,
            0,
            0,
            0,
            0,
            2 * nf,
            0,
            (left + right) * lr,
            (top + bottom) * bt,
            (far + near) * nf,
            1
        );
    }


};


/**==================================================
 *                  Texture Region
 ====================================================*/

function GLGLTextureRegion(x,y,width,height,atlasWidth, atlasHeight) {

    if(x === undefined || y === undefined || width === undefined || height === undefined || atlasWidth === undefined || atlasHeight === undefined) {
        this.data = new Float32Array(8);
        this.data[0] = 0;
        this.data[1] = 0;
        this.data[2] = 1;
        this.data[3] = 0;
        this.data[4] = 1;
        this.data[5] = 1;
        this.data[6] = 0;
        this.data[7] = 1;
    } else {
        var wr = width/atlasWidth;
        var hr = height/atlasHeight;
        var xr = x/atlasWidth;
        var yr = (atlasHeight-y)/atlasHeight;
        this.data = new Float32Array(8);
        /*
         this.data[0] = xr;
         this.data[1] = yr+hr;
         this.data[2] = xr+wr;
         this.data[3] = yr+hr;
         this.data[4] = xr+wr;
         this.data[5] = yr;
         this.data[6] = xr;
         this.data[7] = yr;
         */
        this.data[0] = xr;
        this.data[1] = yr-hr;
        this.data[2] = xr+wr;
        this.data[3] = yr-hr;
        this.data[4] = xr+wr;
        this.data[5] = yr;
        this.data[6] = xr;
        this.data[7] = yr;
    }

};
GLGLTextureRegion.prototype.set = function(x,y,width,height,atlasWidth, atlasHeight) {
    var wr = width/atlasWidth;
    var hr = height/atlasHeight;
    var xr = x/atlasWidth;
    var yr = (atlasHeight-y)/atlasHeight;
    this.data = new Float32Array(8);
    /*
     this.data[0] = xr;
     this.data[1] = yr+hr;
     this.data[2] = xr+wr;
     this.data[3] = yr+hr;
     this.data[4] = xr+wr;
     this.data[5] = yr;
     this.data[6] = xr;
     this.data[7] = yr;
     */
    this.data[0] = xr;
    this.data[1] = yr-hr;
    this.data[2] = xr+wr;
    this.data[3] = yr-hr;
    this.data[4] = xr+wr;
    this.data[5] = yr;
    this.data[6] = xr;
    this.data[7] = yr;
};
GLGLTextureRegion.flipX = function(inregion,outregion) {
    outregion.data[0] = inregion.data[2];
    outregion.data[1] = inregion.data[3];
    outregion.data[2] = inregion.data[0];
    outregion.data[3] = inregion.data[1];
    outregion.data[4] = inregion.data[6];
    outregion.data[5] = inregion.data[7];
    outregion.data[6] = inregion.data[4];
    outregion.data[7] = inregion.data[5];
};
GLGLTextureRegion.flipY = function(inregion,outregion) {
    outregion.data[0] = inregion.data[6];
    outregion.data[1] = inregion.data[7];
    outregion.data[2] = inregion.data[4];
    outregion.data[3] = inregion.data[5];
    outregion.data[4] = inregion.data[2];
    outregion.data[5] = inregion.data[3];
    outregion.data[6] = inregion.data[0];
    outregion.data[7] = inregion.data[1];
};
GLGLTextureRegion.flipXY = function(inregion,outregion) {
    outregion.data[0] = inregion.data[4];
    outregion.data[1] = inregion.data[5];
    outregion.data[2] = inregion.data[6];
    outregion.data[3] = inregion.data[7];
    outregion.data[4] = inregion.data[0];
    outregion.data[5] = inregion.data[1];
    outregion.data[6] = inregion.data[2];
    outregion.data[7] = inregion.data[3];
};


/**==================================================
 *                  Texture Atlas Builder
 ====================================================*/

/*
 *   - INSTRUCTIONS
 *
 *   1.) Create new TextureAtlasBuilder:
 *       (ex.)    var builder = new TextureAtlasBuilder(1024,1024,64)
 *
 *       In this example, I created a new texture that is 1024 pixels x 1024 pixels, made of cells that are 64 pixels by 64 pixels
 *
 *   2.) Load Images:
 *       (ex.)   builder.loadImage('my_image_url.png', 1, 1, 1, 1);
 *
 *       In this example, I loaded an image at the location of cell [1, 1] (64px, 64px), with a width of 1 x 1 cells.
 *
 *       (Note.) If you want the x and y to map directly to the pixel [x,y] , set the cell size to 1 pixel
 *
 *   3.) Finish:
 *       (ex.)   builder.finish( function(url) {
 *                  ...
 *                  document.getElementById('image').src = url;
 *              });
 *
 *       Finish, waits for all images to finish loading, gets the url of your new texture atlas, and calls the supplied function.
 *
 *

 */
function TextureAtlasBuilder(width, height,cellPixelSize) {
    this._atlasCanvas = document.createElement('canvas');
    this._atlasCanvas.width = width;
    this._atlasCanvas.height = height;
    this._atlasContext = this._atlasCanvas.getContext('2d');
    this._loading = false;
    this._cellSize = 1;
    if(cellPixelSize) {
        this._cellSize = cellPixelSize;
    }
    //console.log('new Atlas w='+this._atlasCanvas.width+" h= "+this._atlasCanvas.height+" cell="+this._cellSize);
};

TextureAtlasBuilder.prototype.loadImage = function(imageURL,x,y,width,height) {
    var image = new Image();
    var self = this;
    var w = undefined;
    var h = undefined;
    image.src = imageURL;
    this._loading = true;
    var region = null;

    if(width && height) {
        w = width * self._cellSize;
        h = height * self._cellSize;
        region = new GLGLTextureRegion(x * self._cellSize,y * self._cellSize,w,h,this._atlasCanvas.width,this._atlasCanvas.height);
    } else {
        region = new GLGLTextureRegion(x * self._cellSize,y * self._cellSize,self._cellSize,self._cellSize,this._atlasCanvas.width,this._atlasCanvas.height);
    }

    image.onload = function () {

        if(!width || !height) {
            w = image.width;
            h = (image.height / image.width) * w;
        }
        self._atlasContext.drawImage(image, x * self._cellSize, y * self._cellSize, w, h);
        self._loading = false;

    };
    return region;
};
TextureAtlasBuilder.prototype.finish = function(onFinish) {

    var self = this;
    var call = function() {
        return self.finish(onFinish);
    }
    if(!this._loading) {

        var url = self._atlasCanvas.toDataURL();
        if(onFinish) {
            onFinish(url);
        }
        return url;
    } else {

        setTimeout(call,200);
    }

};


/**==================================================
 *                  GLSL Shader Program
 ====================================================*/

function GLSLShaderProgram(gl,vSource,fSource) {
    this._gl = gl;

    this._vShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(this._vShader,vSource);
    gl.compileShader(this._vShader);
    if(!gl.getShaderParameter(this._vShader, gl.COMPILE_STATUS)) {
        console.log("failed to compile vertex shader");
        alert(gl.getShaderInfoLog(this._vShader));
        gl.deleteShader(this._vShader);
        return;
    }

    this._fShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(this._fShader,fSource);
    gl.compileShader(this._fShader);
    if(!gl.getShaderParameter(this._fShader, gl.COMPILE_STATUS)) {
        console.log("failed to compile fragment shader");
        alert(gl.getShaderInfoLog(this._fShader));
        gl.deleteShader(this._fShader);
        return;
    }

    this._program = gl.createProgram();
    gl.attachShader(this._program,this._vShader);
    gl.attachShader(this._program,this._fShader);
    gl.linkProgram(this._program);

    if(!gl.getProgramParameter(this._program, gl.LINK_STATUS)) {
        alert("failed to link shader");
        return;
    }
    gl.useProgram(this._program);

    this.u_mvMatrix = this.getUniformLocation("u_mvMatrix");
    this.u_pMatrix = this.getUniformLocation("u_pMatrix");

};
GLSLShaderProgram.prototype.use = function() {
    this._gl.useProgram(this._program);
};
GLSLShaderProgram.prototype.getAttribLocation = function(name) {
    return this._gl.getAttribLocation(this._program,name);
};
GLSLShaderProgram.prototype.getUniformLocation = function(name) {
    return this._gl.getUniformLocation(this._program,name);
};
GLSLShaderProgram.prototype.setMatrices = function(modelView,projection) {
    this._gl.uniformMatrix4fv(this.u_pMatrix, false, projection);
    this._gl.uniformMatrix4fv(this.u_mvMatrix, false, modelView);
};

GLSLShaderProgram.prototype.uniform1i = function(uniformName,i) {
    this._gl.uniform1i(this.getUniformLocation(uniformName),i);
};
GLSLShaderProgram.prototype.uniform1f = function(uniformName,f) {
    this._gl.uniform1f(this.getUniformLocation(uniformName),f);
};
GLSLShaderProgram.prototype.uniform1fv = function(uniformName,fv) {
    this._gl.uniform1fv(this.getUniformLocation(uniformName),fv);
};
GLSLShaderProgram.prototype.uniform1iv = function(uniformName,iv) {
    this._gl.uniform1iv(this.getUniformLocation(uniformName),iv);
};
GLSLShaderProgram.prototype.uniform2i = function(uniformName,i, i1) {
    this._gl.uniform2i(this.getUniformLocation(uniformName),i, i1);
};
GLSLShaderProgram.prototype.uniform2f = function(uniformName,f, f1) {
    this._gl.uniform2f(this.getUniformLocation(uniformName),f, f1);
};
GLSLShaderProgram.prototype.uniform2fv = function(uniformName,fv) {
    this._gl.uniform2fv(this.getUniformLocation(uniformName),fv);
};
GLSLShaderProgram.prototype.uniform2iv = function(uniformName,iv) {
    this._gl.uniform2iv(this.getUniformLocation(uniformName),iv);
};
GLSLShaderProgram.prototype.uniform3i = function(uniformName,i,i1,i2) {
    this._gl.uniform3i(this.getUniformLocation(uniformName),i,i1,i2);
};
GLSLShaderProgram.prototype.uniform3f = function(uniformName,f,f1,f2) {
    this._gl.uniform3f(this.getUniformLocation(uniformName),f,f1,f2);
};
GLSLShaderProgram.prototype.uniform3fv = function(uniformName,fv) {
    this._gl.uniform3fv(this.getUniformLocation(uniformName),fv);
};
GLSLShaderProgram.prototype.uniform3iv = function(uniformName,iv) {
    this._gl.uniform3iv(this.getUniformLocation(uniformName),iv);
};
GLSLShaderProgram.prototype.uniform4i = function(uniformName,i,i1,i2,i3) {
    this._gl.uniform4i(this.getUniformLocation(uniformName),i,i1,i2,i3);
};
GLSLShaderProgram.prototype.uniform4f = function(uniformName,f,f1,f2,f3) {
    this._gl.uniform4f(this.getUniformLocation(uniformName),f,f1,f2,f3);
};
GLSLShaderProgram.prototype.uniform4fv = function(uniformName,fv) {
    this._gl.uniform4fv(this.getUniformLocation(uniformName),fv);
};
GLSLShaderProgram.prototype.uniform4iv = function(uniformName,iv) {
    this._gl.uniform4iv(this.getUniformLocation(uniformName),iv);
};
GLSLShaderProgram.prototype.uniformMatrix2fv = function(uniformName,fv) {
    this._gl.uniformMatrix2fv(this.getUniformLocation(uniformName),fv);
};
GLSLShaderProgram.prototype.uniformMatrix3fv = function(uniformName,fv) {
    this._gl.uniformMatrix3fv(this.getUniformLocation(uniformName),fv);
};
GLSLShaderProgram.prototype.uniformMatrix4fv = function(uniformName,fv) {
    this._gl.uniformMatrix4fv(this.getUniformLocation(uniformName),fv);
};


/**==================================================
 *                  GLGL Camera
 ====================================================*/

function GLGLCamera() {
    this.modelViewMatrix = Mat4.create();
    this.projectionMatrix = Mat4.create();
    this.pos = Vec3.create(0,0,0);
    this.target = Vec3.create(0,0,0);
    this.vert = Vec3.create(0,1,0);
}


/**==================================================
 *                  GLGL Matrix Stack
 ====================================================*/

function GLGLMatrixStack() {
    this.modelViewMatrixStack = [Mat4.create()];
    this.projectionMatrixStack = [Mat4.create()];
    this.currentMVIndex = 0;
    this.currentPIndex = 0;
}
GLGLMatrixStack.prototype.pushModelView = function() {
    var mat = this.modelViewMatrixStack[this.currentMVIndex];
    this.currentMVIndex+=1;
    if( this.currentMVIndex >= this.modelViewMatrixStack.length ) {
        this.modelViewMatrixStack.push(Mat4.clone(mat));
    } else {
        Mat4.clone(mat,this.modelViewMatrixStack[this.currentMVIndex]);
    }

}
GLGLMatrixStack.prototype.pushProjection = function() {
    var mat = this.projectionMatrixStack[this.currentPIndex];
    this.currentMVIndex+=1;
    if( this.currentPIndex >= this.projectionMatrixStack.length ) {
        this.projectionMatrixStack.push(Mat4.clone(mat));
    } else {
        Mat4.clone(mat,this.projectionMatrixStack[this.currentPIndex]);
    }
}
GLGLMatrixStack.prototype.popModelView = function() {
    this.currentMVIndex = (this.currentMVIndex>0)?this.currentMVIndex-1 : 0;
}
GLGLMatrixStack.prototype.popProjection = function() {
    this.currentPIndex = (this.currentPIndex>0)?this.currentPIndex-1 : 0;
}
GLGLMatrixStack.prototype.getModelViewMatrix = function() {
    return this.modelViewMatrixStack[this.currentMVIndex];
}
GLGLMatrixStack.prototype.getProjectionMatrix = function() {
    return this.projectionMatrixStack[this.currentPIndex];
}


/**==================================================
 *                  GLGL Library
 ====================================================*/

var GLGL = (function() {
    var Constants = {FLOAT_BYTES: 4};
    var _container = null;
    var _windowElement = null;
    var _glCanvas = null;

    var _gl = null;
    var _depthTestEnabled = false;
    var _blendEnabled = false;

    function initialize(options) {
        var width = 256;
        var height = 256;
        _container = options.container;
        if(options.width) {
            width = options.width;
        }
        if(options.height) {
            height = options.height;
        }
        _windowElement = document.createElement('div');
        _windowElement.id = "game_window";
        _windowElement.style.position = "relative";
        _windowElement.style.display = "inline-block";
        _windowElement.style.width = width+'px';
        _windowElement.style.height = height+'px';
        _glCanvas = document.createElement('canvas');
        _glCanvas.id = 'gl_canvas';
        _glCanvas.width = width;
        _glCanvas.height = height;
        _windowElement.appendChild(_glCanvas);
        _container.appendChild(_windowElement);

        initGL();

        _gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // Set clear color to black, fully opaque
        enableDepthTest();
        enableBlend();
        //_gl.clear(_gl.COLOR_BUFFER_BIT|_gl.DEPTH_BUFFER_BIT);      // Clear the color as well as the depth buffer.


        Constants.STATIC_DRAW = _gl.STATIC_DRAW;
        Constants.DYNAMIC_DRAW = _gl.DYNAMIC_DRAW;
    }

    function initGL() {
        if(_glCanvas) {
            try {
                _gl = _glCanvas.getContext("webgl");
                _gl.viewPortWidth = _glCanvas.width;
                _gl.viewPortHeight = _glCanvas.height;
            } catch(e) {

            }
            if(!_gl) {
                alert("Failed to initialize WebGL Context");
            }


        }
    }


    function enableDepthTest() {
        if(arguments[0] !== undefined && arguments[0] === false) {
            _depthTestEnabled = arguments[0];
            _gl.disable(_gl.DEPTH_TEST);

        } else {
            _depthTestEnabled = true;
            _gl.enable(_gl.DEPTH_TEST);
            _gl.depthFunc(_gl.LEQUAL);
        }
    }
    function enableBlend() {
        if(arguments[0] !== undefined && arguments[0] === false) {
            _blendEnabled = arguments[0];
            _gl.disable(_gl.BLEND);

        } else {
            _blendEnabled = true;
            _gl.enable(_gl.BLEND);
            _gl.blendFunc(_gl.SRC_ALPHA, _gl.ONE);
        }
    }

    /*
     *   Returns the GL context
     *
     */

    function getContext() {
        return _gl;
    }
    /*
     *   Creates a shader program from the specified fragment and vertex shader source
     *   {vertex}:      if {strings} is true, {vertex} is the source of the vertex shader, otherwise it is the id of a script element on the DOM that contains the source
     *   {fragment}:    if {strings} is true, {fragment} is the source of the fragment shader, otherwise it is the id of a script element on the DOM that contains the source
     *   {strings}:     [optional] if true, {vertex} and {fragment} are the source code for the shader program
     *
     */
    function createShaderProgram (vertex, fragment,strings) {
        if(strings) {
            return new GLSLShaderProgram(_gl,vertex,fragment);
        } else {
            var vertexSource = "";
            var fragmentSource = "";
            var vElem = document.getElementById(vertex);
            var fElem = document.getElementById(fragment);
            var k = vElem.firstChild;
            while (k) {
                if (k.nodeType == 3)
                    vertexSource += k.textContent;
                k = k.nextSibling;
            }
            k = fElem.firstChild;
            while (k) {
                if (k.nodeType == 3)
                    fragmentSource += k.textContent;
                k = k.nextSibling;
            }

            return new GLSLShaderProgram(_gl,vertexSource,fragmentSource);
        }
    }
    /*
    *   Internal function that creates a texture from a given image (if specified, blank otherwise)
    *   {image}:     image to create texture from
    *   {texture}:   [optional] texture to load image to, if already exists
    *   {width}:    [optional] only required if no image is supplied
    *   {height}:    [optional] only required if no image is supplied
    *
    */
    function createTexture2D (image, texture, width, height) {

        var output = (texture) ? texture : _gl.createTexture();
        if(image) {
            output.image = image;
            _gl.bindTexture(_gl.TEXTURE_2D, output);
            _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, true);
            _gl.texImage2D(_gl.TEXTURE_2D, 0, _gl.RGBA, _gl.RGBA, _gl.UNSIGNED_BYTE, output.image);
            _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_MAG_FILTER, _gl.NEAREST);
            _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_MIN_FILTER, _gl.NEAREST);
            _gl.generateMipmap(_gl.TEXTURE_2D);
            _gl.bindTexture(_gl.TEXTURE_2D, null);
        } else {
            if(width === undefined || height === undefined) {
                
            } else {
                _gl.bindTexture(_gl.TEXTURE_2D, output);
                _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_MAG_FILTER, _gl.LINEAR);
                _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_MIN_FILTER, _gl.LINEAR_MIPMAP_NEAREST);
                _gl.generateMipmap(_gl.TEXTURE_2D);
                _gl.texImage2D(_gl.TEXTURE_2D, 0, _gl.RGBA, width, height, 0, _gl.RGBA, _gl.UNSIGNED_BYTE, null);
                _gl.bindTexture(_gl.TEXTURE_2D, null);
            }
        }
        return output;

    }
    /*
    *   Loads a texture from the specified image url
    *   {imgSrc}:     the url of the image to create texture from
    *
    */
    function loadTexture2D(imgSrc) {
        var img = new Image();
        img.src = imgSrc;
        var output = _gl.createTexture();
        img.onload = function() {
            createTexture2D(img,output);
            console.log("loaded");
        }
        return output;
    }
    /*
    *   Creates a new blank texture with the specified width and height
    *   {width:     width
    *   {height}:   height
    *
    */
    function newTexture2D(width,height) {
        return createTexture2D(null,null,width,height);
    }
    /*
    *   {options}:          function to call on drawing frame
    *   - data:             vertex data
    *   - attributeArray:   an array of objects that specify the attribute names and sizes
    *           (ex)        {name: "a_position", size: 3}
    *   *NOTE
    *       the order of the array is the order in which the data must be formatted
    */
    function createArrayBuffer (options) {
        var output = null;
        var itemSize = 1;
        var drawType = _gl.STATIC_DRAW;
        var stride = 0;
        output = _gl.createBuffer();

        if(options.data) {
            _gl.bindBuffer(_gl.ARRAY_BUFFER,output);
            if(options.data instanceof Float32Array) {
                _gl.bufferData(_gl.ARRAY_BUFFER,options.data,drawType);
            } else {
                if(options.data.length !== undefined) {
                    _gl.bufferData(_gl.ARRAY_BUFFER,new Float32Array(options.data),drawType);
                } else {

                }
            }

        }

        if(options.attributeArray) {
            output.attributeArray = [];
            var count = options.attributeArray.length;
            var i = 0;
            var offset = 0;
            var vertexSize = 0;
            for(i=0;i<count;i+=1) {
                output.attributeArray.push({name: options.attributeArray[i].name, size: options.attributeArray[i].size, offset: offset * Constants.FLOAT_BYTES});
                vertexSize += options.attributeArray[i].size;
                offset += options.attributeArray[i].size;
            }
            output.stride = (( count > 1) ?  vertexSize : 0) * Constants.FLOAT_BYTES ;
            output.itemCount = options.data.length / vertexSize;
        }

        return output;
    }
    /*
    *   {buffer}:       the buffer object to draw
    *   {shader}:       the shader that has been bound
    *   {multibuffer}:  true if multiple buffers are being used insead of one interlaced one
    *
    */
    function drawArrayBuffer(buffer,shader,multiBuffer) {
        var count = buffer.attributeArray.length;
        var i=0;
        var cAttribLocation = null;
        if(multiBuffer) {

        } else {
            _gl.bindBuffer(_gl.ARRAY_BUFFER, buffer);

            for(i=0;i<count;i+=1) {
                cAttribLocation = shader.getAttribLocation(buffer.attributeArray[i].name);
                _gl.enableVertexAttribArray(cAttribLocation);
                _gl.vertexAttribPointer(cAttribLocation, buffer.attributeArray[i].size, _gl.FLOAT, false, buffer.stride, buffer.attributeArray[i].offset);
            }
            _gl.drawArrays(_gl.TRIANGLES, 0, buffer.itemCount);
        }

    }
    
    /*
    *   {drawFunc}:     function to call on drawing frame
    *   {barebones}:    if true, prerendering functions are not called
    *
    */
    function render (drawFunc, barebones) {
        if(barebones) {
            if(drawFunc) {
                drawFunc(_gl);
            }
        } else {
            _gl.viewport(0, 0, _glCanvas.clientWidth, _glCanvas.clientHeight);
            _gl.clear(_gl.COLOR_BUFFER_BIT | _gl.DEPTH_BUFFER_BIT);
            if(drawFunc) {
                drawFunc(_gl);
            }
        }
    }

    return {
        Constants: Constants,
        init: initialize,
        getGLContext: getContext,
        loadTexture: loadTexture2D,
        newTexture: newTexture2D,
        createArrayBuffer: createArrayBuffer,
        createShaderProgram: createShaderProgram,
        drawArrayBuffer: drawArrayBuffer,
        render: render,
        ShaderProgram: GLSLShaderProgram,
        Camera: GLGLCamera
    };
})();



/**==================================================
 *                  Sprite3D
 ====================================================*/

function GLGLSprite3D(x,y,z,width,height,angle, textureRegion) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.textureRegion = textureRegion;
    var region = textureRegion.data;
    GLGL.createArrayBuffer({
        data: new Float32Array([
            0.0, 0.0, 0.0, /*  */ 1.0, 1.0, 1.0, 1.0, /*  */ region[0], region[1],
            1.0, 0.0, 0.0, /*  */ 1.0, 1.0, 1.0, 1.0, /*  */ region[2], region[3],
            0.0, 1.0, 0.0, /*  */ 1.0, 1.0, 1.0, 1.0, /*  */ region[6], region[7],
            0.0, 1.0, 0.0, /*  */ 1.0, 1.0, 1.0, 1.0, /*  */ region[6], region[7],
            1.0, 0.0, 0.0, /*  */ 1.0, 1.0, 1.0, 1.0, /*  */ region[2], region[3],
            1.0, 1.0, 0.0, /*  */ 1.0, 1.0, 1.0, 1.0, /*  */ region[4], region[5]
        ]),
        attributeArray: [
            {
                name: 'a_position',
                size: 3
            },
            {
                name: 'a_worldPosition',
                size: 3
            },
            {
                name: 'a_color',
                size: 4
            },
            {
                name: 'a_texCoord',
                size: 2
            }
        ]
    })

}

GLGLSprite3D.prototype.draw = function(gl) {

}
