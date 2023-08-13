package com.fractalautomatawaveband.demos.zeroth.mov;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Movie {

    private @Id @GeneratedValue Long id;
    private String mname;
    private Integer myear;

    public Movie() {
    }

    public Movie(String name, Integer year) {
        this.mname = name;
        this.myear = year;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMname() {
        return mname;
    }

    public void setMname(String mname) {
        this.mname = mname;
    }

    public Integer getMyear() {
        return myear;
    }

    public void setMyear(Integer myear) {
        this.myear = myear;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((mname == null) ? 0 : mname.hashCode());
        result = prime * result + ((myear == null) ? 0 : myear.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Movie other = (Movie) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (mname == null) {
            if (other.mname != null)
                return false;
        } else if (!mname.equals(other.mname))
            return false;
        if (myear == null) {
            if (other.myear != null)
                return false;
        } else if (!myear.equals(other.myear))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Movie [id=" + id + ", mname=" + mname + ", myear=" + myear + "]";
    }
    
}
